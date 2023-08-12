/**
 * @generated SignedSource<<231515562fe299199b33f8b6b09225dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostUpvoteButtonRemoveMutation$variables = {
  postID: string;
};
export type PostUpvoteButtonRemoveMutation$data = {
  readonly removePanoUpvote: {
    readonly node: {
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"PostUpvoteButton_post">;
      } | null;
    } | null;
  } | null;
};
export type PostUpvoteButtonRemoveMutation = {
  response: PostUpvoteButtonRemoveMutation$data;
  variables: PostUpvoteButtonRemoveMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "postID"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "postID"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostUpvoteButtonRemoveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemovePanoUpvotePayload",
        "kind": "LinkedField",
        "name": "removePanoUpvote",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PanoUpvote",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "PostUpvoteButton_post"
                  }
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostUpvoteButtonRemoveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemovePanoUpvotePayload",
        "kind": "LinkedField",
        "name": "removePanoUpvote",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PanoUpvote",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isUpvotedByViewer",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "upvoteCount",
                        "storageKey": null
                      }
                    ],
                    "type": "PanoPost",
                    "abstractKey": null
                  }
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5b999fb332a0e2a4119c3a230fc154ab",
    "id": null,
    "metadata": {},
    "name": "PostUpvoteButtonRemoveMutation",
    "operationKind": "mutation",
    "text": "mutation PostUpvoteButtonRemoveMutation(\n  $postID: ID!\n) {\n  removePanoUpvote(input: {id: $postID}) {\n    node {\n      node {\n        __typename\n        ...PostUpvoteButton_post\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment PostUpvoteButton_post on PanoPost {\n  id\n  isUpvotedByViewer\n  upvoteCount\n}\n"
  }
};
})();

(node as any).hash = "80393846fb4313db8f1559edc1ddec53";

export default node;
