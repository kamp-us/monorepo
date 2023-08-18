import { Suspense } from "react";
import { graphql, useFragment, usePaginationFragment } from "react-relay";

import { Button } from "@kampus/ui";

import { PostItem } from "~/app/pano/features/post-list/PostItem";
import { type PanoFeedBySite_viewer$key } from "./__generated__/PanoFeedBySite_viewer.graphql";
import { type PanoFeedBySiteFragment$key } from "./__generated__/PanoFeedBySiteFragment.graphql";

const fragment = graphql`
  fragment PanoFeedBySiteFragment on Viewer
  @argumentDefinitions(
    site: { type: "String!" }
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
  )
  @refetchable(queryName: "PanoFeedBySitePaginationQuery") {
    panoFeedBySite(after: $after, first: $first, site: $site)
      @connection(key: "PanoFeedBySiteFragment__panoFeedBySite") {
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
  fragment PanoFeedBySite_viewer on Viewer {
    ...PostItem_viewer
  }
`;

interface Props {
  panoFeedBySite: PanoFeedBySiteFragment$key;
  panoViewerBySite: PanoFeedBySite_viewer$key;
}

export function PanoFeedBySite(props: Props) {
  const { data, hasNext, hasPrevious, loadNext, loadPrevious } = usePaginationFragment(
    fragment,
    props.panoFeedBySite
  );
  const viewer = useFragment(viewerFragment, props.panoViewerBySite);

  const feed = data.panoFeedBySite;

  return (
    <>
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
                postConnectionId={data.panoFeedBySite?.__id}
              />
            );
          })}

          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => loadPrevious(10)} disabled={!hasPrevious}>
              {"< Prev"}
            </Button>
            <Button variant="secondary" onClick={() => loadNext(10)} disabled={!hasNext}>
              {"Next >"}
            </Button>
          </div>
        </section>
      </Suspense>
    </>
  );
}
