import { Inter } from "next/font/google";

import "./globals.css";

import { SidebarNavProps, SideNavbar, ThemeProvider } from "@kampus/ui-next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kamp.us",
  description: "authentication",
};

const Links: SidebarNavProps["items"] = [
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Settings",
    href: "/settings",
  },
  {
    title: "Providers",
    href: "/providers",
  },
  {
    title: "Account",
    href: "/account",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="my-8 flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="mx-4 lg:w-1/5">
              <SideNavbar items={Links} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
