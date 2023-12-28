import { auth } from "@clerk/nextjs";
import {
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  Store,
  type CacheConfig,
  type GraphQLResponse,
  type RequestParameters,
  type Variables,
} from "relay-runtime";

import { type Dictionary } from "@kampus/std";

const IS_SERVER = typeof window === typeof undefined;
const CACHE_TTL = 5 * 1000; // 5 seconds, to resolve preloaded results

const HTTP_ENDPOINT = IS_SERVER ? (process.env.NEXT_PUBLIC_GQL_URL as string) : "/gql";

export async function networkFetch(
  request: RequestParameters,
  variables: Variables
): Promise<GraphQLResponse> {
  const headers: Dictionary<string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  // pasaport wraps next-auth and uses its cookie auth mechanism to validate sessions.
  // on browsers, fetch request automatically attaches the existing cookies
  // but on next.js servers, `fetch` is pollyfilled, and does not pick up cookies
  // we use `next/header`'s cookies() helper here
  if (IS_SERVER) {
    const { getToken } = auth();

    // console.log(">>>>>>>>>>>>>>>>>>>", nextHeaders.headers());
    // console.log("request headers >>>>>>>>", request.headers);

    const token = await getToken();

    console.log("naber", { token });

    headers.Authorization = `Bearer ${token}`;
  }

  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const json = (await resp.json()) as { errors: any };

  // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
  // property of the response. If any exceptions occurred when processing the request,
  // throw an error to indicate to the developer what went wrong.
  if (Array.isArray(json.errors)) {
    console.error(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${request.name}' with variables '${JSON.stringify(
        variables
      )}': ${JSON.stringify(json.errors)}`
    );
  }

  return json;
}

export const responseCache: QueryResponseCache | null = IS_SERVER
  ? null
  : new QueryResponseCache({
      size: 100,
      ttl: CACHE_TTL,
    });

function createNetwork() {
  async function fetchResponse(
    params: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig
  ) {
    const isQuery = params.operationKind === "query";
    const cacheKey = params.id ?? params.cacheID;
    const forceFetch = cacheConfig && cacheConfig.force;
    if (responseCache != null && isQuery && !forceFetch) {
      const fromCache = responseCache.get(cacheKey, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return networkFetch(params, variables);
  }

  return Network.create(fetchResponse);
}

function createEnvironment() {
  console.log("creating environment", { IS_SERVER });
  return new Environment({
    network: createNetwork(),
    store: new Store(RecordSource.create()),
    isServer: IS_SERVER,
  });
}

export const environment = createEnvironment();

export function getCurrentEnvironment() {
  if (IS_SERVER) {
    return createEnvironment();
  }

  return environment;
}
