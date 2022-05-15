import { withSSR } from "~/features/utils/amplify/withSSR";
import { listPosts } from "~/graphql/queries";

export const SSRGQL = async ({
  request,
  query,
}: {
  request: Request;
  query: string;
}) => {
  const SSR = withSSR({ request });
  let authMode;
  try {
    await SSR.Auth.currentSession();
    authMode = "AMAZON_COGNITO_USER_POOLS";
  } catch {
    authMode = "API_KEY";
  }

  const { data } = await SSR.API.graphql({
    query,
    authMode,
  });

  return data;
};
