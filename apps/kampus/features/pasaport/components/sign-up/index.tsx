import Link from "next/link";

import { env } from "~/env";

export const PasaportSignUp = () => {
  return <Link href={`${env.NEXTAUTH_URL}/signup`}>Sign-up With Pasaport</Link>;
};
