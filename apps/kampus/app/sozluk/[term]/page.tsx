import { env } from "~/env.mjs";

export default async function SozlukTermPage({ params }: { params: { term: string } }) {
  const {
    sozluk: { term },
  } = await fetcher(makeQuery(params.term));

  return (
    <>
      <h2 className="text-3xl font-bold">{term.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: term.body.html }} />
    </>
  );
}

const makeQuery = (id: string) => {
  return `
{
  sozluk {
    term(input: {id: "${id}"}) {
      id
      title
      tags
      body {
        raw
        code
        html
      }
    }
  }
}`;
};

const fetcher = (query: string) =>
  fetch(env.GQL_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);
