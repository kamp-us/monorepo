/**
 * @generated SignedSource<<4128ebf17cc3008cd5a95bcf6aeaa2d1>>
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
    readonly displayName: string | null;
  } | null;
  readonly url: string | null;
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
      "kind": "ScalarField",
      "name": "url",
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
          "name": "displayName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PanoPost",
  "abstractKey": null
};

(node as any).hash = "da66b10353f75748a4c9f0b709916d9a";

export default node;
