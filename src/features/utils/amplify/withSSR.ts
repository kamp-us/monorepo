import { withSSRContext, API } from "aws-amplify";
import { GraphQLOptions } from "@aws-amplify/api-graphql";

interface GQLOptions<TVariables = object>
  extends Omit<GraphQLOptions, "variables"> {
  variables?: TVariables;
}

export const withSSR = ({ request }: { request: Request }) => {
  const SSR = withSSRContext({
    req: {
      headers: {
        cookie: request.headers.get("Cookie"),
      },
    },
  });

  const graphql = async <T, TVariables extends object>(
    options: GQLOptions<TVariables>,
    additionalHeaders?: {
      [key: string]: string;
    }
  ) => {
    let authMode: "AMAZON_COGNITO_USER_POOLS" | "API_KEY";
    try {
      await SSR.Auth.currentSession();
      authMode = "AMAZON_COGNITO_USER_POOLS";
    } catch {
      authMode = "API_KEY";
    }

    const result = await (SSR.API as typeof API).graphql<T>(
      { ...options, authMode },
      additionalHeaders
    );

    console.log(result);

    return result.data as T;
  };

  return { ...SSR, graphql };
};
