/**
 * @generated SignedSource<<a6df2527ece59a68ecac7321eaca6247>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentCommentItem_viewer$data = {
  readonly actor: {
    readonly displayName: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"CommentMoreOptions_viewer" | "CreateCommentCommentForm_viewer">;
  readonly " $fragmentType": "CommentCommentItem_viewer";
};
export type CommentCommentItem_viewer$key = {
  readonly " $data"?: CommentCommentItem_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentCommentItem_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentCommentItem_viewer",
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
      "name": "CreateCommentCommentForm_viewer"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "37864c4b8987915eef14e23d55637e5b";

export default node;
