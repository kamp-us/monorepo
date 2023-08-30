import { graphql, useFragment } from "react-relay";
import { useViewer_viewer$key } from "./__generated__/useViewer_viewer.graphql";


export const useViewerFragment = (key: useViewer_viewer$key | null) =>
  useFragment(
    graphql`
      fragment useViewer_viewer on Viewer {
        actor {
          displayName
        }
      }
    `,
    key
  );
