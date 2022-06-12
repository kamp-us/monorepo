import { LoaderFunction, useParams } from "remix";
import invariant from "tiny-invariant";
import { ListCollectionsQuery, ListCollectionsQueryVariables } from "~/API";
import { withSSR } from "~/features/utils/amplify/withSSR";
import { listCollections } from "~/graphql/queries";

type LoaderData = {};

export const loader: LoaderFunction = ({ request, params }) => {
  invariant(params.username, "username is required");
  invariant(params.slug, "collection id is required");

  const { graphql } = withSSR({ request });

  const collection = graphql<
    ListCollectionsQuery,
    ListCollectionsQueryVariables
  >({
    query: listCollections,
    variables: {
      filter: {
        owner: { eq: params.username },
        id: { eq: params.id },
      },
    },
  });

  invariant(collection, "Collection not found: ");
};

const UserCollection = () => {
  const params = useParams();

  return <pre>{JSON.stringify(params, null, 2)}</pre>;
};

export default UserCollection;
