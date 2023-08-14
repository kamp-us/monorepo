/**
 * @generated SignedSource<<4b69c454a3a58b7052f9e79ba03b1bec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostItem_viewer$data = {
  readonly actor: {
    readonly displayName: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"MoreOptions_viewer">;
  readonly " $fragmentType": "PostItem_viewer";
};
export type PostItem_viewer$key = {
  readonly " $data"?: PostItem_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostItem_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostItem_viewer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MoreOptions_viewer"
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

(node as any).hash = "08a45a50da6ade7e46c243f7477d30ac";

export default node;
