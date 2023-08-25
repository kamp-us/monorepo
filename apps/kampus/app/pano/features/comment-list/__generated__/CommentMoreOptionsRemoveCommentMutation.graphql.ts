/**
 * @generated SignedSource<<40c4678a86dee1cd7afe283fcf61f8c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CommentMoreOptionsRemoveCommentMutation$variables = {
  commentID: string;
  connections: ReadonlyArray<string>;
};
export type CommentMoreOptionsRemoveCommentMutation$data = {
  readonly removePanoComment: {
    readonly edge: {
      readonly node: {
        readonly content: string;
        readonly id: string;
      } | null;
    } | null;
  } | null;
};
export type CommentMoreOptionsRemoveCommentMutation = {
  response: CommentMoreOptionsRemoveCommentMutation$data;
  variables: CommentMoreOptionsRemoveCommentMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "commentID"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v2 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "commentID"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentMoreOptionsRemoveCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RemovePanoCommentPayload",
        "kind": "LinkedField",
        "name": "removePanoComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PanoCommentEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PanoComment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CommentMoreOptionsRemoveCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RemovePanoCommentPayload",
        "kind": "LinkedField",
        "name": "removePanoComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PanoCommentEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PanoComment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "filters": null,
                    "handle": "deleteEdge",
                    "key": "",
                    "kind": "ScalarHandle",
                    "name": "id",
                    "handleArgs": [
                      {
                        "kind": "Variable",
                        "name": "connections",
                        "variableName": "connections"
                      }
                    ]
                  },
                  (v4/*: any*/)
                ],
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
    "cacheID": "824f2fed1e22cdbeb95e7ec6adb07ddb",
    "id": null,
    "metadata": {},
    "name": "CommentMoreOptionsRemoveCommentMutation",
    "operationKind": "mutation",
    "text": "mutation CommentMoreOptionsRemoveCommentMutation(\n  $commentID: ID!\n) {\n  removePanoComment(input: {id: $commentID}) {\n    edge {\n      node {\n        id\n        content\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0f0b2f95d3b023f6f113dc2f598788bd";

export default node;
