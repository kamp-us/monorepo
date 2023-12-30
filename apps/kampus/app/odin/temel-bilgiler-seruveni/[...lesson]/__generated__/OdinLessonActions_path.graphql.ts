/**
 * @generated SignedSource<<4d6df88c8ba3285bb7afcfd03ec74c08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OdinLessonActions_path$data = {
  readonly path: string;
  readonly title: string;
  readonly " $fragmentType": "OdinLessonActions_path";
};
export type OdinLessonActions_path$key = {
  readonly " $data"?: OdinLessonActions_path$data;
  readonly " $fragmentSpreads": FragmentRefs<"OdinLessonActions_path">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OdinLessonActions_path",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "path",
      "storageKey": null
    }
  ],
  "type": "OdinLesson",
  "abstractKey": null
};

(node as any).hash = "e3f2187f2cab3481f968264683c6a39c";

export default node;
