import Link from "next/link";

import { env } from "~/env";

export const PasaportSignOut = () => {
  return <Link href={`${env.NEXTAUTH_URL}/signout`}>Sign-out</Link>;
};
