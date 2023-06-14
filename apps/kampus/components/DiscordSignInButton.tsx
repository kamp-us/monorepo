"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const DiscordSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl: any = searchParams?.get("callbackUrl");

  return (
    <button
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700"
      onClick={() => signIn("discord", { callbackUrl })}
    >
      Continue with Discord
    </button>
  );
};

export default DiscordSignInButton;
