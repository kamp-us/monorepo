/**
 * @generated SignedSource<<d41ba67f52d7c234d67922679ebd796f>>
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
  } | null;
  readonly " $fragmentType": "CommentMoreOptions_comment";
};
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

(node as any).hash = "820a093df22cfcaaa1dd4d5f61000020";

export default node;
