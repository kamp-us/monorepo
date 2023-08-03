import { RelayEnvironmentProvider } from "@kampus/relay";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RelayEnvironmentProvider>{children}</RelayEnvironmentProvider>
      </body>
    </html>
  );
}
