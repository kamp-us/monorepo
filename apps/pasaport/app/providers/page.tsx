import { getServerSession } from "@kampus/next-auth";

import { ProviderButton } from "~/components/ProviderButton";

const existingProviders = ["GitHub", "Discord", "Twitch"];

export default async function Providers() {
  return (
    <main>
      <section>
        <h2 className="mb-3">Providers</h2>
        <div className="flex flex-col gap-3">
          {existingProviders.map((provider) => (
            <ProviderButton name={provider} connected={false} />
          ))}
        </div>
      </section>
    </main>
  );
}
