/**
 * @generated SignedSource<<f6d8678233748b9ad21bd3126337d8f7>>
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
    readonly " $fragmentSpreads": FragmentRefs<"UserAvatar_user">;
  };
  readonly recentComments: {
    readonly nodes: ReadonlyArray<{
      readonly owner: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"UserAvatar_user">;
      } | null;
    } | null> | null;
  } | null;
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

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "UserAvatar_user"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostItem_post",
  "selections": [
    (v0/*: any*/),
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
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      "action": "LOG",
      "path": "owner"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PostUpvoteButton_post"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MoreOptions_post"
    },
    {
      "alias": "recentComments",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 3
        }
      ],
      "concreteType": "PanoCommentConnection",
      "kind": "LinkedField",
      "name": "comments",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PanoComment",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "User",
              "kind": "LinkedField",
              "name": "owner",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "comments(last:3)"
    }
  ],
  "type": "PanoPost",
  "abstractKey": null
};
})();

(node as any).hash = "bf18b1aca0dc672939d3fdf61addc33f";

export default node;
