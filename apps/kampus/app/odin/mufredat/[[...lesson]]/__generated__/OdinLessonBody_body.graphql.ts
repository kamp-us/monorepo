/**
 * @generated SignedSource<<31c0f63eaf50e1b0e1f0c68ecdf8574b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OdinLessonBody_body$data = {
  readonly html: string;
  readonly " $fragmentType": "OdinLessonBody_body";
};
export type OdinLessonBody_body$key = {
  readonly " $data"?: OdinLessonBody_body$data;
  readonly " $fragmentSpreads": FragmentRefs<"OdinLessonBody_body">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OdinLessonBody_body",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "html",
      "storageKey": null
    }
  ],
  "type": "OdinLessonBody",
  "abstractKey": null
};

(node as any).hash = "fd029028bff783a95f18495de0112ae8";

export default node;
