import { type ReactNode } from "react";

export default function SozlukTermLayout({ children }: { children: ReactNode }) {
  return <main className="flex min-h-screen flex-col p-24">{children}</main>;
}
