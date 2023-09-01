/**
 * @generated SignedSource<<6ca722eb8ca27220bd43394d04e5baa5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentUpvoteButtonCreateMutation$variables = {
  commentID: string;
};
export type CommentUpvoteButtonCreateMutation$data = {
  readonly createPanoUpvote: {
    readonly node: {
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"CommentUpvoteButton_comment">;
      } | null;
    } | null;
  } | null;
};
export type CommentUpvoteButtonCreateMutation = {
  response: CommentUpvoteButtonCreateMutation$data;
  variables: CommentUpvoteButtonCreateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "commentID"
  }
],
v1 = [
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
    "name": "CommentUpvoteButtonCreateMutation",
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
                    "name": "CommentUpvoteButton_comment"
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
    "name": "CommentUpvoteButtonCreateMutation",
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
                    "type": "PanoComment",
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
    "cacheID": "2a57e6d6e06198f0b95c05de55f10a69",
    "id": null,
    "metadata": {},
    "name": "CommentUpvoteButtonCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CommentUpvoteButtonCreateMutation(\n  $commentID: ID!\n) {\n  createPanoUpvote(input: {id: $commentID}) {\n    node {\n      node {\n        __typename\n        ...CommentUpvoteButton_comment\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment CommentUpvoteButton_comment on PanoComment {\n  id\n  isUpvotedByViewer\n  upvoteCount\n}\n"
  }
};
})();

(node as any).hash = "50025f0b95c76e1abcae2148e196b885";

export default node;
