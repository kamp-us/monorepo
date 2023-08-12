/**
 * @generated SignedSource<<a5b5ccbd105ab3e2022aa41f17b9c696>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostItem_viewer$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MoreOptions_viewer">;
  readonly " $fragmentType": "PostItem_viewer";
};
export type PostItem_viewer$key = {
  readonly " $data"?: PostItem_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostItem_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostItem_viewer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MoreOptions_viewer"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "691b7ff06781176ab6c92034830657db";

export default node;
