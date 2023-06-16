import loadSerializableQuery from "@kampus/relay/load-serializable-query";
import SozlukTermQueryNode, { type SozlukTermQuery } from "./__generated__/SozlukTermQuery.graphql";
import { SozlukTermContainer } from "~/app/sozluk/[term]/SozlukTerm";

export default async function SozlukTermPage({ params }: { params: { term: string } }) {
  const preloadedQuery = await loadSerializableQuery<SozlukTermQuery>(SozlukTermQueryNode, {
    id: params.term,
  });

  return <SozlukTermContainer preloadedQuery={preloadedQuery} />;
}
