/**
 * @generated SignedSource<<5963b49e55a3bdc409ab12e7ce8959e9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PanoFeedBySite_viewer$data = {
  readonly " $fragmentSpreads": FragmentRefs<"PostItem_viewer">;
  readonly " $fragmentType": "PanoFeedBySite_viewer";
};
export type PanoFeedBySite_viewer$key = {
  readonly " $data"?: PanoFeedBySite_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"PanoFeedBySite_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PanoFeedBySite_viewer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PostItem_viewer"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "0345e9f43077fa9ebb6f7848f3eb0300";

export default node;
