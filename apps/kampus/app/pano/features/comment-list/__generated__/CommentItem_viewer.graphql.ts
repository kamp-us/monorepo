/**
 * @generated SignedSource<<4f6d251b37b6a44a652d643ba2db2bf0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentItem_viewer$data = {
  readonly actor: {
    readonly displayName: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"CommentMoreOptions_viewer" | "UpdateCommentForm_viewer">;
  readonly " $fragmentType": "CommentItem_viewer";
};
export type CommentItem_viewer$key = {
  readonly " $data"?: CommentItem_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentItem_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentItem_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "actor",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentMoreOptions_viewer"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UpdateCommentForm_viewer"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "5ce6ddfa7e59ccc925728be787f54779";

export default node;
