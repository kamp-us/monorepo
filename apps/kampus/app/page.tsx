import Link from "next/link";

import { getServerSession } from "@kampus/next-auth";

export default async function Home() {
  // const session = await getServerSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      selam kampus
      {/* Enable line below for testing */}
      {/* {session ? (
        <Link href="/pasaport/signout">logout</Link>
      ) : (
        <Link href="/pasaport/signin">login</Link>
      )}
      <pre>{JSON.stringify(session, null, 2)}</pre> */}
    </main>
  );
}
