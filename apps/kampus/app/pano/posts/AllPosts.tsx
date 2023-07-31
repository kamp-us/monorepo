import { useCallback } from "react";
import { graphql, usePaginationFragment } from "react-relay";

import { Button } from "@kampus/ui-next";

import { PostItem } from "../features/post-list/PostItem";
import { type AllPostsFragment$key } from "./__generated__/AllPostsFragment.graphql";
import { type AllPostsPaginationQuery } from "./__generated__/AllPostsPaginationQuery.graphql";

const fragment = graphql`
  fragment AllPostsFragment on Query
  @argumentDefinitions(after: { type: "String" }, first: { type: "Int", defaultValue: 2 })
  @refetchable(queryName: "AllPostsPaginationQuery") {
    pano {
      allPosts(first: $first, after: $after) @connection(key: "AllPostFragment_pano_allPosts") {
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
  const { data, loadNext, isLoadingNext, refetch, hasNext } = usePaginationFragment<
    AllPostsPaginationQuery,
    AllPostsFragment$key
  >(fragment, props.allPosts);

  const loadMore = useCallback(() => {
    console.log({ isLoadingNext, hasNext });
    if (!isLoadingNext && hasNext) {
      loadNext(2);
    }
  }, [hasNext, isLoadingNext, loadNext]);

  return (
    <section>
      {data?.pano.allPosts?.edges?.map((edge) => {
        if (!edge?.node) {
          return null;
        }

        if (!edge.cursor) {
          return null;
        }

        return <PostItem key={edge.cursor} post={edge.node} />;
      })}

      <div>
        <Button onClick={loadMore} disabled={isLoadingNext}>
          {isLoadingNext ? "Loading..." : "Load More"}
        </Button>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            refetch({ first: 5 });
          }}
          disabled={isLoadingNext}
        >
          Refetch with 5 items
        </Button>
      </div>
    </section>
  );
}
