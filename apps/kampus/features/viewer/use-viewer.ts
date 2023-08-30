import { graphql, useFragment } from "react-relay";
import { useViewer_actor$key } from "./__generated__/useViewer_actor.graphql";


export const useViewerFragment = (key: useViewer_actor$key | null) =>
  useFragment(
    graphql`
      fragment useViewer_actor on Viewer {
        actor {
          displayName
        }
      }
    `,
    key
  );
