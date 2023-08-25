/**
 * @generated SignedSource<<e9b568c38a7e551bcc11cce56052c5a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentUpvoteButton_comment$data = {
  readonly id: string;
  readonly isUpvotedByViewer: boolean;
  readonly upvoteCount: number | null;
  readonly " $fragmentType": "CommentUpvoteButton_comment";
};
export type CommentUpvoteButton_comment$key = {
  readonly " $data"?: CommentUpvoteButton_comment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentUpvoteButton_comment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentUpvoteButton_comment",
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
      "name": "isUpvotedByViewer",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "upvoteCount",
      "storageKey": null
    }
  ],
  "type": "PanoComment",
  "abstractKey": null
};

(node as any).hash = "9a912deb59395b77edb90d7ba28a2a65";

export default node;
