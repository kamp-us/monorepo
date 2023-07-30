import { getServerSession } from "@kampus/next-auth";

import { ProviderButton } from "~/components/ProviderButton";

export default async function Providers() {
  const session = await getServerSession();
  return (
    <main>
      <section>
        <h2 className="mb-3">Providers</h2>
        <div className="flex flex-col gap-3">
          {session?.user?.providers.map((provider) => (
            <ProviderButton name={provider.name} connected={provider.connected} />
          ))}
        </div>
      </section>
    </main>
  );
}
