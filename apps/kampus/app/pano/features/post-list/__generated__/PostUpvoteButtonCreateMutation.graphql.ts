/**
 * @generated SignedSource<<21216c42345396b26bb8bd6cc02ea4d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostUpvoteButtonCreateMutation$variables = {
  postID: string;
};
export type PostUpvoteButtonCreateMutation$data = {
  readonly createPanoUpvote: {
    readonly node: {
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"PostUpvoteButton_post">;
      } | null;
    } | null;
  } | null;
};
export type PostUpvoteButtonCreateMutation = {
  response: PostUpvoteButtonCreateMutation$data;
  variables: PostUpvoteButtonCreateMutation$variables;
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
    "name": "PostUpvoteButtonCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePanoUpvotePayload",
        "kind": "LinkedField",
        "name": "createPanoUpvote",
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
    "name": "PostUpvoteButtonCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePanoUpvotePayload",
        "kind": "LinkedField",
        "name": "createPanoUpvote",
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
    "cacheID": "3dbb755fbc310f36aca78b6c2f59d49b",
    "id": null,
    "metadata": {},
    "name": "PostUpvoteButtonCreateMutation",
    "operationKind": "mutation",
    "text": "mutation PostUpvoteButtonCreateMutation(\n  $postID: ID!\n) {\n  createPanoUpvote(input: {id: $postID}) {\n    node {\n      node {\n        __typename\n        ...PostUpvoteButton_post\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment PostUpvoteButton_post on PanoPost {\n  id\n  isUpvotedByViewer\n  upvoteCount\n}\n"
  }
};
})();

(node as any).hash = "29468852508d63b612d4c17611a5344d";

export default node;
