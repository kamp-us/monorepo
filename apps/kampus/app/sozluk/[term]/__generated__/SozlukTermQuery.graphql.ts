/**
 * @generated SignedSource<<0607f440cba7ab2a27fe27945fda43c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SozlukTermQuery$variables = {
  id: string;
};
export type SozlukTermQuery$data = {
  readonly sozluk: {
    readonly term: {
      readonly body: {
        readonly " $fragmentSpreads": FragmentRefs<"SozlukTermBody_body">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"SozlukTermTitle_title">;
    } | null;
  };
};
export type SozlukTermQuery = {
  response: SozlukTermQuery$data;
  variables: SozlukTermQuery$variables;
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
    "name": "SozlukTermQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SozlukQuery",
        "kind": "LinkedField",
        "name": "sozluk",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "SozlukTerm",
            "kind": "LinkedField",
            "name": "term",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SozlukTermBody",
                "kind": "LinkedField",
                "name": "body",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "SozlukTermBody_body"
                  }
                ],
                "storageKey": null
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SozlukTermTitle_title"
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
    "name": "SozlukTermQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SozlukQuery",
        "kind": "LinkedField",
        "name": "sozluk",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "SozlukTerm",
            "kind": "LinkedField",
            "name": "term",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SozlukTermBody",
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
    "cacheID": "5f5ae35be4d410b783292852cf6de435",
    "id": null,
    "metadata": {},
    "name": "SozlukTermQuery",
    "operationKind": "query",
    "text": "query SozlukTermQuery(\n  $id: ID!\n) {\n  sozluk {\n    term(id: $id) {\n      body {\n        ...SozlukTermBody_body\n      }\n      ...SozlukTermTitle_title\n      id\n    }\n  }\n}\n\nfragment SozlukTermBody_body on SozlukTermBody {\n  html\n}\n\nfragment SozlukTermTitle_title on SozlukTerm {\n  title\n}\n"
  }
};
})();

(node as any).hash = "3fe0834cd15a55bc4548c13748506b45";

export default node;
