/**
 * @generated SignedSource<<b4462c3458da3d3dad9453ce25becec7>>
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
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
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
    "cacheID": "1b33e6b23bd1328f9e608ba6784029ca",
    "id": null,
    "metadata": {},
    "name": "SozlukTermQuery",
    "operationKind": "query",
    "text": "query SozlukTermQuery(\n  $id: ID!\n) {\n  sozluk {\n    term(input: {id: $id}) {\n      body {\n        ...SozlukTermBody_body\n      }\n      ...SozlukTermTitle_title\n      id\n    }\n  }\n}\n\nfragment SozlukTermBody_body on SozlukTermBody {\n  html\n}\n\nfragment SozlukTermTitle_title on SozlukTerm {\n  title\n}\n"
  }
};
})();

(node as any).hash = "0079e4dfdf38ca0bea6990f11661f126";

export default node;
