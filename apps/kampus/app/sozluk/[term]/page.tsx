import { loadSerializableQuery } from "@kampus/relay";
import { SozlukTermClientComponent } from "./SozlukTermClientComponent";
import SozlukTermQueryNode, { type SozlukTermQuery } from "./__generated__/SozlukTermQuery.graphql";

export default async function SozlukTermPage({ params }: { params: { term: string } }) {
  const preloadedQuery = await loadSerializableQuery<typeof SozlukTermQueryNode, SozlukTermQuery>(
    SozlukTermQueryNode.params,
    { id: params.term }
  );

  return <SozlukTermClientComponent preloadedQuery={preloadedQuery} />;
}
