import { Suspense } from "react";
import Link from "next/link";
import { graphql, useFragment, usePaginationFragment } from "react-relay";

import { Button } from "@kampus/ui";
import { Session } from "@kampus/next-auth";

import { PostItem } from "~/app/pano/features/post-list/PostItem";
import { type PanoFeed_viewer$key } from "./__generated__/PanoFeed_viewer.graphql";
import { type PanoFeedFragment$key } from "./__generated__/PanoFeedFragment.graphql";

const fragment = graphql`
  fragment PanoFeedFragment on Viewer
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 20 }
    before: { type: "String" }
    last: { type: "Int" }
    filter: { type: "PanoPostFilter" }
  )
  @refetchable(queryName: "PanoFeedPaginationQuery") {
    panoFeed(first: $first, after: $after, last: $last, before: $before, filter: $filter)
      @connection(key: "PanoFeedFragment__panoFeed") {
      __id
      edges {
        cursor
        node {
          id
          ...PostItem_post
        }
      }
    }
  }
`;

const viewerFragment = graphql`
  fragment PanoFeed_viewer on Viewer {
    ...PostItem_viewer
    actor {
      displayName
    }
  }
`;

interface Props {
  session: Session | null;
  panoFeed: PanoFeedFragment$key;
  panoViewer: PanoFeed_viewer$key;
}

export function PanoFeed(props: Props) {
  const { data, hasNext, hasPrevious, loadNext, loadPrevious } = usePaginationFragment(
    fragment,
    props.panoFeed
  );
  const viewer = useFragment(viewerFragment, props.panoViewer);
  // I get undefined here.
  console.log(viewer?.actor);

  const feed = data.panoFeed;

  return (
    <>
      {props.session && (
        <Button variant="outline" asChild>
          <Link
            href={{
              pathname: `/post/create`,
              search: `foo=bar`,
            }}
            as="post/create"
          >
            New post
          </Link>
        </Button>
      )}
      <Suspense fallback="loading">
        <section className="flex flex-col gap-4">
          {feed?.edges?.map((edge) => {
            if (!edge?.node) {
              return null;
            }

            return (
              <PostItem
                key={edge.node.id}
                post={edge.node}
                viewerRef={viewer}
                postConnectionId={data.panoFeed?.__id}
              />
            );
          })}

          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => loadPrevious(20)} disabled={!hasPrevious}>
              {"< Prev"}
            </Button>
            <Button variant="secondary" onClick={() => loadNext(20)} disabled={!hasNext}>
              {"Next >"}
            </Button>
          </div>
        </section>
      </Suspense>
    </>
  );
}
