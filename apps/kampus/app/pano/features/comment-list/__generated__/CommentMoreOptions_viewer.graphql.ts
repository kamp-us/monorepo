/**
 * @generated SignedSource<<5e75b134c95a8c369de606513d077588>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentMoreOptions_viewer$data = {
  readonly actor: {
    readonly displayName: string | null;
  } | null;
  readonly " $fragmentType": "CommentMoreOptions_viewer";
};
export type CommentMoreOptions_viewer$key = {
  readonly " $data"?: CommentMoreOptions_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentMoreOptions_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentMoreOptions_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "actor",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "7b6a2fcc165df66421395c3bfd690495";

export default node;
