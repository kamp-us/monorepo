import Link from "next/link";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@kampus/next-auth";

export default async function Home() {
  // const session = (await getServerSession(authOptions)) as any;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      selam kampus
      {/* Enable line below for testing */}
      {/* <Link href="/pasaport/signin">login</Link>
      <pre>{JSON.stringify(session, null, 2)}</pre> */}
    </main>
  );
}
