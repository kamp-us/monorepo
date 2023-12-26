// Convert preloaded query object (with raw GraphQL Response) into
// Relay's PreloadedQuery.

import { useMemo } from "react";
import { useRelayEnvironment, type PreloadedQuery, type PreloadFetchPolicy } from "react-relay";
import { type OperationType } from "relay-runtime";

import { responseCache } from "./environment";
import { type SerializablePreloadedQuery } from "./load-serializable-query"; // This hook convert serializable preloaded query

// This hook convert serializable preloaded query into Relay's PreloadedQuery
// object. It is also writes this serializable preloaded query into
// QueryResponseCache, so we the network layer can use these cache results when
// fetching data in `usePreloadedQuery`.
export default function useSerializablePreloadedQuery<TQuery extends OperationType>(
  preloadedQuery: SerializablePreloadedQuery<TQuery>,
  fetchPolicy: PreloadFetchPolicy = "store-or-network"
): PreloadedQuery<TQuery> {
  const environment = useRelayEnvironment();

  useMemo(() => {
    writePreloadedQueryToCache(preloadedQuery);
  }, [preloadedQuery]);

  return {
    environment,
    fetchKey: preloadedQuery.params.id ?? preloadedQuery.params.cacheID,
    fetchPolicy,
    isDisposed: false,
    name: preloadedQuery.params.name,
    kind: "PreloadedQuery",
    variables: preloadedQuery.variables,
    dispose: () => {
      return;
    },
  };
}

function writePreloadedQueryToCache<TQuery extends OperationType>({
  params,
  variables,
  response,
}: SerializablePreloadedQuery<TQuery>) {
  responseCache?.set(params.id ?? params.cacheID, variables, response);
}
