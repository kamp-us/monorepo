import { RemixBrowser } from "@remix-run/react";
import ReactDOM from "react-dom";
import { ClientCacheProvider } from "~/ui-library";

ReactDOM.hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
