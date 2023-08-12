/**
 * @generated SignedSource<<2478b6046490e5ee84ce6791b6e0549d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostUpvoteButton_post$data = {
  readonly id: string;
  readonly isUpvotedByViewer: boolean;
  readonly upvoteCount: number;
  readonly " $fragmentType": "PostUpvoteButton_post";
} | null;
export type PostUpvoteButton_post$key = {
  readonly " $data"?: PostUpvoteButton_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostUpvoteButton_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostUpvoteButton_post",
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
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "upvoteCount",
        "storageKey": null
      },
      "action": "LOG",
      "path": "upvoteCount"
    }
  ],
  "type": "PanoPost",
  "abstractKey": null
};

(node as any).hash = "8a017b87720262bba0f0d0df96b6d0d4";

export default node;
