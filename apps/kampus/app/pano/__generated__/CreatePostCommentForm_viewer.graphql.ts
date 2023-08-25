/**
 * @generated SignedSource<<b997d14f63552a0b8df312b98286d5ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreatePostCommentForm_viewer$data = {
  readonly actor: {
    readonly displayName: string | null;
  } | null;
  readonly " $fragmentType": "CreatePostCommentForm_viewer";
};
export type CreatePostCommentForm_viewer$key = {
  readonly " $data"?: CreatePostCommentForm_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CreatePostCommentForm_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreatePostCommentForm_viewer",
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
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "8446636d05ee7efadcb7218cbbd2b5d1";

export default node;
