/**
 * @generated SignedSource<<d9abe5561f4eac9a2af1b75dc39309e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SinglePostContainerQuery$variables = {
  id: string;
};
export type SinglePostContainerQuery$data = {
  readonly pano: {
    readonly post: {
      readonly " $fragmentSpreads": FragmentRefs<"SinglePostFeed_post">;
    } | null;
  };
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"SinglePostFeed_viewer">;
  } | null;
};
export type SinglePostContainerQuery = {
  response: SinglePostContainerQuery$data;
  variables: SinglePostContainerQuery$variables;
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "commentCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isUpvotedByViewer",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "upvoteCount",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v11 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v12 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SinglePostContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SinglePostFeed_viewer"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PanoQuery",
        "kind": "LinkedField",
        "name": "pano",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "PanoPost",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SinglePostFeed_post"
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
    "name": "SinglePostContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "actor",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PanoQuery",
        "kind": "LinkedField",
        "name": "pano",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "PanoPost",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              },
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "site",
                "storageKey": null
              },
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": (v11/*: any*/),
                "concreteType": "PanoCommentConnection",
                "kind": "LinkedField",
                "name": "comments",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PanoCommentEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PanoComment",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v10/*: any*/),
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PanoPost",
                            "kind": "LinkedField",
                            "name": "post",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v12/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasPreviousPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "startCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/)
                ],
                "storageKey": "comments(first:10)"
              },
              {
                "alias": null,
                "args": (v11/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "SinglePostFeedFragment__comments",
                "kind": "LinkedHandle",
                "name": "comments"
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
    "cacheID": "8794e82a7b817e130cf5d00a344fe733",
    "id": null,
    "metadata": {},
    "name": "SinglePostContainerQuery",
    "operationKind": "query",
    "text": "query SinglePostContainerQuery(\n  $id: ID!\n) {\n  viewer {\n    ...SinglePostFeed_viewer\n  }\n  pano {\n    post(id: $id) {\n      ...SinglePostFeed_post\n      id\n    }\n  }\n}\n\nfragment CommentItem_comment on PanoComment {\n  id\n  content\n  createdAt\n  owner {\n    displayName\n    id\n  }\n  commentCount\n  post {\n    id\n  }\n  ...CommentUpvoteButton_comment\n  ...CommentMoreOptions_comment\n}\n\nfragment CommentItem_viewer on Viewer {\n  actor {\n    __typename\n    displayName\n    id\n  }\n  ...CommentMoreOptions_viewer\n  ...UpdateCommentForm_viewer\n}\n\nfragment CommentMoreOptions_comment on PanoComment {\n  id\n  post {\n    id\n  }\n  owner {\n    displayName\n    id\n  }\n}\n\nfragment CommentMoreOptions_viewer on Viewer {\n  actor {\n    __typename\n    displayName\n    id\n  }\n}\n\nfragment CommentUpvoteButton_comment on PanoComment {\n  id\n  isUpvotedByViewer\n  upvoteCount\n}\n\nfragment CreatePostCommentForm_viewer on Viewer {\n  actor {\n    __typename\n    displayName\n    id\n  }\n}\n\nfragment MoreOptions_post on PanoPost {\n  id\n  owner {\n    displayName\n    id\n  }\n}\n\nfragment MoreOptions_viewer on Viewer {\n  actor {\n    __typename\n    displayName\n    id\n  }\n}\n\nfragment PostItem_post on PanoPost {\n  id\n  title\n  content\n  url\n  createdAt\n  site\n  commentCount\n  ...PostUpvoteButton_post\n  owner {\n    displayName\n    id\n  }\n  ...MoreOptions_post\n}\n\nfragment PostItem_viewer on Viewer {\n  ...MoreOptions_viewer\n  actor {\n    __typename\n    displayName\n    id\n  }\n}\n\nfragment PostUpvoteButton_post on PanoPost {\n  id\n  isUpvotedByViewer\n  upvoteCount\n}\n\nfragment SinglePostFeed_post on PanoPost {\n  ...PostItem_post\n  commentCount\n  comments(first: 10) {\n    edges {\n      node {\n        id\n        content\n        createdAt\n        owner {\n          displayName\n          id\n        }\n        ...CommentItem_comment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment SinglePostFeed_viewer on Viewer {\n  ...PostItem_viewer\n  ...CommentItem_viewer\n  ...CreatePostCommentForm_viewer\n}\n\nfragment UpdateCommentForm_viewer on Viewer {\n  actor {\n    __typename\n    displayName\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2249de17b9d10b64e5069e983047fe3e";

export default node;
