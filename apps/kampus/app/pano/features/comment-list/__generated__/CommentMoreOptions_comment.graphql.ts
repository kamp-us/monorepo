/**
 * @generated SignedSource<<aac369c825de70431c43ca0c96f67ddf>>
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
  readonly " $fragmentType": "CommentMoreOptions_comment";
};
export type CommentMoreOptions_comment$key = {
  readonly " $data"?: CommentMoreOptions_comment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentMoreOptions_comment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentMoreOptions_comment",
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

(node as any).hash = "8d099d051875d0adf45fc3e7191f22e8";

export default node;
