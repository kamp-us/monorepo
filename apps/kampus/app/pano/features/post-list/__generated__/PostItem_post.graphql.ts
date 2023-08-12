/**
 * @generated SignedSource<<a3a8bf896c849c44812c64d62f8867ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostItem_post$data = {
  readonly content: string | null;
  readonly createdAt: any;
  readonly id: string;
  readonly owner: {
    readonly displayName: string;
  };
  readonly site: string | null;
  readonly title: string;
  readonly url: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"PostUpvoteButton_post">;
  readonly " $fragmentType": "PostItem_post";
} | null;
export type PostItem_post$key = {
  readonly " $data"?: PostItem_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostItem_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostItem_post",
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
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
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "site",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PostUpvoteButton_post"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "owner",
        "plural": false,
        "selections": [
          {
            "kind": "RequiredField",
            "field": {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "displayName",
              "storageKey": null
            },
            "action": "LOG",
            "path": "owner.displayName"
          }
        ],
        "storageKey": null
      },
      "action": "LOG",
      "path": "owner"
    }
  ],
  "type": "PanoPost",
  "abstractKey": null
};

(node as any).hash = "2722b74002976e15c158a0be92853b78";

export default node;
