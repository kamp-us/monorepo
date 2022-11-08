import { withSSRContext } from "aws-amplify";

export const withSSR = ({ request }: { request: Request }) => {
  const SSR = withSSRContext({
    req: {
      headers: {
        cookie: request.headers.get("Cookie"),
      },
    },
  });

  const graphql = async <TVariables = {}, TQuery = any>({
    query,
    variables,
  }: {
    query: string;
    variables?: TVariables;
  }) => {
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
      variables,
    });

    return data as TQuery;
  };

  return { ...SSR, graphql };
};
