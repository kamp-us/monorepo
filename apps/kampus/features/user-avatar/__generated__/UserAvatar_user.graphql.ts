/**
 * @generated SignedSource<<202276d5c9c021e80d9c3dcaeaef4ffb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserAvatar_user$data = {
  readonly displayName: string;
  readonly " $fragmentType": "UserAvatar_user";
} | null;
export type UserAvatar_user$key = {
  readonly " $data"?: UserAvatar_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserAvatar_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserAvatar_user",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
        "storageKey": null
      },
      "action": "LOG",
      "path": "displayName"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "fa391a9500fe047c9832ba716e4b785a";

export default node;
