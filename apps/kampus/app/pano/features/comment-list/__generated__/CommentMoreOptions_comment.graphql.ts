/**
 * @generated SignedSource<<3c81d39b138324a82b5e40ad209ba5f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentMoreOptions_comment$data = {
  readonly id: string;
  readonly owner: {
    readonly displayName: string | null;
  } | null;
  readonly post: {
    readonly id: string;
  };
  readonly " $fragmentType": "CommentMoreOptions_comment";
} | null;
export type CommentMoreOptions_comment$key = {
  readonly " $data"?: CommentMoreOptions_comment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentMoreOptions_comment">;
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
  "name": "CommentMoreOptions_comment",
  "selections": [
    (v0/*: any*/),
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
  "type": "PanoComment",
  "abstractKey": null
};
})();

(node as any).hash = "c4121b9e6ee30e11971e068a0e562e44";

export default node;
