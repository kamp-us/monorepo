import { useCallback } from "react";
import { graphql, usePaginationFragment } from "react-relay";

import { Button } from "@kampus/ui-next";

import { PostItem } from "../features/post-list/PostItem";
import { type AllPostsFragment$key } from "./__generated__/AllPostsFragment.graphql";
import { type AllPostsPaginationQuery } from "./__generated__/AllPostsPaginationQuery.graphql";

const fragment = graphql`
  fragment AllPostsFragment on Query
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 2 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "AllPostsPaginationQuery") {
    pano {
      allPosts(first: $first, after: $after, last: $last, before: $before)
        @connection(key: "AllPostFragment_pano_allPosts") {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            ...PostItem_post
          }
        }
      }
    }
  }
`;

interface Props {
  allPosts: AllPostsFragment$key;
}

export function AllPosts(props: Props) {
  const { data, refetch, hasNext, hasPrevious } = usePaginationFragment<
    AllPostsPaginationQuery,
    AllPostsFragment$key
  >(fragment, props.allPosts);

  const allPosts = data.pano.allPosts;

  const loadPrevPage = useCallback(() => {
    if (allPosts?.pageInfo.startCursor && hasPrevious) {
      refetch({ before: allPosts.pageInfo.startCursor, last: 2 });
    }
  }, [allPosts?.pageInfo.startCursor, hasPrevious, refetch]);

  const loadNextPage = useCallback(() => {
    if (allPosts?.pageInfo.endCursor && hasNext) {
      refetch({ after: allPosts.pageInfo.endCursor, first: 2 });
    }
  }, [allPosts?.pageInfo.endCursor, hasNext, refetch]);

  return (
    <section className="flex flex-col gap-4">
      {data?.pano.allPosts?.edges?.map((edge) => {
        if (!edge?.node) {
          return null;
        }

        if (!edge.cursor) {
          return null;
        }

        return <PostItem key={edge.cursor} post={edge.node} />;
      })}

      <div className="flex gap-2">
        <Button variant="secondary" onClick={loadPrevPage} disabled={!hasPrevious}>
          {"< Prev"}
        </Button>
        <Button variant="secondary" onClick={loadNextPage} disabled={!hasNext}>
          {"Next >"}
        </Button>
      </div>
    </section>
  );
}
