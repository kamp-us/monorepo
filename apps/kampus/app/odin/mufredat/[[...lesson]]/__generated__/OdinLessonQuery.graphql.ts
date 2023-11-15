/**
 * @generated SignedSource<<64c17bb347ae9c86c1eb931f750c2232>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type OdinLessonQuery$variables = {
  id: string;
};
export type OdinLessonQuery$data = {
  readonly odin: {
    readonly lesson: {
      readonly body: {
        readonly html: string;
        readonly raw: string;
      };
      readonly title: string;
    } | null;
  };
};
export type OdinLessonQuery = {
  response: OdinLessonQuery$data;
  variables: OdinLessonQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "OdinLessonBody",
  "kind": "LinkedField",
  "name": "body",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "html",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "raw",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OdinLessonQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OdinQuery",
        "kind": "LinkedField",
        "name": "odin",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "OdinLesson",
            "kind": "LinkedField",
            "name": "lesson",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OdinLessonQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OdinQuery",
        "kind": "LinkedField",
        "name": "odin",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "OdinLesson",
            "kind": "LinkedField",
            "name": "lesson",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2610fdb51c1eae7bd764ecf82c5430fe",
    "id": null,
    "metadata": {},
    "name": "OdinLessonQuery",
    "operationKind": "query",
    "text": "query OdinLessonQuery(\n  $id: ID!\n) {\n  odin {\n    lesson(id: $id) {\n      title\n      body {\n        html\n        raw\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "47aa11e6a96a9d4e7de89ae051bb35af";

export default node;
