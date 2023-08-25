/**
 * @generated SignedSource<<394fde70b25422ba01f937a8bb7db31b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SinglePostFeed_post$data = {
  readonly " $fragmentSpreads": FragmentRefs<"PostItem_post">;
  readonly " $fragmentType": "SinglePostFeed_post";
};
export type SinglePostFeed_post$key = {
  readonly " $data"?: SinglePostFeed_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"SinglePostFeed_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SinglePostFeed_post",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PostItem_post"
    }
  ],
  "type": "PanoPost",
  "abstractKey": null
};

(node as any).hash = "c6b7d20974511bba3d58ef34c34d4ef0";

export default node;
