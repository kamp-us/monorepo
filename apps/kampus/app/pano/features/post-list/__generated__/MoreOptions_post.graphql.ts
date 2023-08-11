/**
 * @generated SignedSource<<789c3dcce5dd3bfead2297a6ac6667d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MoreOptions_post$data = {
  readonly id: string;
  readonly owner: {
    readonly username: string;
  } | null;
  readonly " $fragmentType": "MoreOptions_post";
};
export type MoreOptions_post$key = {
  readonly " $data"?: MoreOptions_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"MoreOptions_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MoreOptions_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "owner",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "username",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PanoPost",
  "abstractKey": null
};

(node as any).hash = "9d3d7c45939c77a59da8a5829f1aa5c2";

export default node;
