import { type ReactNode } from "react";

export default function OdinLessonLayout({ children }: { children: ReactNode }) {
  return <main className="container flex min-h-screen flex-col">{children}</main>;
}
