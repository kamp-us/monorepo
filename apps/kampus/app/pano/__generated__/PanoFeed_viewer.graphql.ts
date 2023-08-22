/**
 * @generated SignedSource<<285a7607218f1bcd3ce4cf4f6613f8d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PanoFeed_viewer$data = {
  readonly actor: {
    readonly displayName: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"PostItem_viewer">;
  readonly " $fragmentType": "PanoFeed_viewer";
};
export type PanoFeed_viewer$key = {
  readonly " $data"?: PanoFeed_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"PanoFeed_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PanoFeed_viewer",
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

(node as any).hash = "aa9717b7dd3561c13af770ff24544e2d";

export default node;
