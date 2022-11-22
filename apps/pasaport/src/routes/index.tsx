import { CenteredContainer } from "@kampus/ui";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type LoaderData = {
  hello: "world";
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    hello: "world",
  });
};

export const Home = () => {
  const { hello } = useLoaderData<LoaderData>();

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>{hello}</CenteredContainer>
  );
};

export default Home;
