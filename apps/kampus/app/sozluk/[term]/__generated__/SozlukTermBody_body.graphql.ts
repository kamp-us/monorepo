/**
 * @generated SignedSource<<d298fac0d7f8a7bc2d73032fca3579f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SozlukTermBody_body$data = {
  readonly html: string;
  readonly " $fragmentType": "SozlukTermBody_body";
};
export type SozlukTermBody_body$key = {
  readonly " $data"?: SozlukTermBody_body$data;
  readonly " $fragmentSpreads": FragmentRefs<"SozlukTermBody_body">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SozlukTermBody_body",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "html",
      "storageKey": null
    }
  ],
  "type": "SozlukTermBody",
  "abstractKey": null
};

(node as any).hash = "69c2e079b45948bce43c3e8c55dfd4eb";

export default node;
