/**
 * @generated SignedSource<<e2c700a8fff37aba4ba6ac1c112acfaa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SinglePostFeed_viewer$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommentItem_viewer" | "CreatePostCommentForm_viewer" | "PostItem_viewer">;
  readonly " $fragmentType": "SinglePostFeed_viewer";
};
export type SinglePostFeed_viewer$key = {
  readonly " $data"?: SinglePostFeed_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"SinglePostFeed_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SinglePostFeed_viewer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PostItem_viewer"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentItem_viewer"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CreatePostCommentForm_viewer"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "8df25d22b0a34e69db8f44a8e6042e39";

export default node;
