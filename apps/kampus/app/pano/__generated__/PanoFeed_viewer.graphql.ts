/**
 * @generated SignedSource<<6909702fcff66160abb20fbbfeab1e64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PanoFeed_viewer$data = {
  readonly displayName: string | null;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayName",
      "storageKey": null
    }
  ],
  "type": "Actor",
  "abstractKey": "__isActor"
};

(node as any).hash = "d899f3d2a551aba8616408feb294eb54";

export default node;
