/**
 * @generated SignedSource<<e0aad5255e3f70590fdec7e731016e72>>
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
  readonly post: {
    readonly id: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"CommentMoreOptions_comment" | "CommentUpvoteButton_comment">;
  readonly " $fragmentType": "CommentItem_comment";
} | null;
export type CommentItem_comment$key = {
  readonly " $data"?: CommentItem_comment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentItem_comment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentItem_comment",
  "selections": [
    (v0/*: any*/),
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
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "PanoPost",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      "action": "LOG",
      "path": "post"
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
})();

(node as any).hash = "43444ed89eabd1816196c838dfeeccd4";

export default node;
