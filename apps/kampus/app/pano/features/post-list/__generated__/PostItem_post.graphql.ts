/**
 * @generated SignedSource<<5f75e5667edef9e6857b85ad1a46e63d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostItem_post$data = {
  readonly commentCount: number;
  readonly content: string | null;
  readonly createdAt: any;
  readonly id: string;
  readonly owner: {
    readonly displayName: string;
  };
  readonly site: string | null;
  readonly title: string;
  readonly url: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"MoreOptions_post" | "PostUpvoteButton_post">;
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
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "commentCount",
        "storageKey": null
      },
      "action": "LOG",
      "path": "commentCount"
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MoreOptions_post"
    }
  ],
  "type": "PanoPost",
  "abstractKey": null
};

(node as any).hash = "03c1325a353b031abe75c421b022ef9f";

export default node;
