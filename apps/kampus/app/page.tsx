import { getServerSession } from "@kampus/next-auth";

import { PasaportSignIn, PasaportSignOut } from "~/features/pasaport";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      selam kampus
      {session ? <PasaportSignOut /> : <PasaportSignIn />}
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
