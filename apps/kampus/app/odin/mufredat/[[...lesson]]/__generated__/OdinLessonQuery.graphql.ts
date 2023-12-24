/**
 * @generated SignedSource<<1f9b6633a32b19230f062d501df84ad1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OdinLessonQuery$variables = {
  id: string;
};
export type OdinLessonQuery$data = {
  readonly odin: {
    readonly lesson: {
      readonly body: {
        readonly " $fragmentSpreads": FragmentRefs<"OdinLessonBody_body">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"OdinLessonTitle_title">;
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
];
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
              {
                "alias": null,
                "args": null,
                "concreteType": "OdinLessonBody",
                "kind": "LinkedField",
                "name": "body",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "OdinLessonBody_body"
                  }
                ],
                "storageKey": null
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "OdinLessonTitle_title"
              }
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
              {
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
                  }
                ],
                "storageKey": null
              },
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
    "cacheID": "4a4f62ede402f2c78b6c617405ff04a0",
    "id": null,
    "metadata": {},
    "name": "OdinLessonQuery",
    "operationKind": "query",
    "text": "query OdinLessonQuery(\n  $id: ID!\n) {\n  odin {\n    lesson(id: $id) {\n      body {\n        ...OdinLessonBody_body\n      }\n      ...OdinLessonTitle_title\n      id\n    }\n  }\n}\n\nfragment OdinLessonBody_body on OdinLessonBody {\n  html\n}\n\nfragment OdinLessonTitle_title on OdinLesson {\n  title\n}\n"
  }
};
})();

(node as any).hash = "e6c2ac9ec9d395036a370b7eb281512d";

export default node;
