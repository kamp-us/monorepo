import { type ReactNode } from "react";

export default function OdinLessonLayout({ children }: { children: ReactNode }) {
  return <main className="container flex mx-auto flex-col">{children}</main>;
}
