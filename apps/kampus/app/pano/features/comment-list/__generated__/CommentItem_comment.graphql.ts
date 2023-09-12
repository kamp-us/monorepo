/**
 * @generated SignedSource<<0f9ba95719e84d33862f64b6eb640447>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentItem_comment$data = {
  readonly __id: string;
  readonly commentCount: number | null;
  readonly content: string;
  readonly createdAt: any;
  readonly id: string;
  readonly owner: {
    readonly displayName: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"CommentMoreOptions_comment" | "CommentUpvoteButton_comment">;
  readonly " $fragmentType": "CommentItem_comment";
};
export type CommentItem_comment$key = {
  readonly " $data"?: CommentItem_comment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentItem_comment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentItem_comment",
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
      "name": "content",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "commentCount",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentUpvoteButton_comment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentMoreOptions_comment"
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "PanoComment",
  "abstractKey": null
};

(node as any).hash = "e8df019c2d1528e52c9469d656244c74";

export default node;
