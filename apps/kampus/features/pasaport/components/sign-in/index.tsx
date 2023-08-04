import Link from "next/link";

import { env } from "~/env";

export const PasaportSignIn = () => {
  return <Link href={`${env.NEXTAUTH_URL}/signin`}>Sign-in With Pasaport</Link>;
};
