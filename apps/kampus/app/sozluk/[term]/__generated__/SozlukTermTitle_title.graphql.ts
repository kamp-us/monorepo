/**
 * @generated SignedSource<<63c2b88aa3fc83f39c13336d2546b357>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SozlukTermTitle_title$data = {
  readonly title: string;
  readonly " $fragmentType": "SozlukTermTitle_title";
};
export type SozlukTermTitle_title$key = {
  readonly " $data"?: SozlukTermTitle_title$data;
  readonly " $fragmentSpreads": FragmentRefs<"SozlukTermTitle_title">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SozlukTermTitle_title",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "SozlukTerm",
  "abstractKey": null
};

(node as any).hash = "e28d550c1de758426c85e8743926b907";

export default node;
