import ReactDOM from "react-dom";
import { RemixBrowser } from "remix";
import { ClientCacheProvider } from "~/ui-library/StyleProvider";

ReactDOM.hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
