/**
 * @generated SignedSource<<58c1831b671bd4d04b0ad09cfdbb1f81>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PanoFeed_viewer$data = {
  readonly actor: {
    readonly displayName: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"PostItem_viewer">;
  readonly " $fragmentType": "PanoFeed_viewer";
};
export type PanoFeed_viewer$key = {
  readonly " $data"?: PanoFeed_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"PanoFeed_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PanoFeed_viewer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PostItem_viewer"
    },
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

(node as any).hash = "a1563ae245b11b75b895ddb8725c0000";

export default node;
