import { ClientCacheProvider } from "@kampus/ui";
import { RemixBrowser } from "@remix-run/react";
import ReactDOM from "react-dom";

ReactDOM.hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
