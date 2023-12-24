/**
 * @generated SignedSource<<7278aba7cd13753f0abba74cb737f7ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OdinLessonTitle_title$data = {
  readonly title: string;
  readonly " $fragmentType": "OdinLessonTitle_title";
};
export type OdinLessonTitle_title$key = {
  readonly " $data"?: OdinLessonTitle_title$data;
  readonly " $fragmentSpreads": FragmentRefs<"OdinLessonTitle_title">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OdinLessonTitle_title",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "OdinLesson",
  "abstractKey": null
};

(node as any).hash = "53753beb777de94d98970a9f14b44e1e";

export default node;
