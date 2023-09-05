/**
 * @generated SignedSource<<828cab75a67b5d1d1d87a9790a12002e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PanoPostFilter = "ACTIVE" | "MOST_COMMENTED" | "MOST_UPVOTED" | "OWNED" | "%future added value";
export type PostListContainerQuery$variables = {
  filter?: PanoPostFilter | null;
};
export type PostListContainerQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"PanoFeedFragment" | "PanoFeed_viewer">;
  } | null;
};
export type PostListContainerQuery = {
  response: PostListContainerQuery$data;
  variables: PostListContainerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = {
  "kind": "Variable",
  "name": "filter",
  "variableName": "filter"
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
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
  "name": "displayName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostListContainerQuery",
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
            "args": [
              (v1/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "PanoFeedFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PanoFeed_viewer"
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
    "name": "PostListContainerQuery",
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
            "args": (v2/*: any*/),
            "concreteType": "PanoPostConnection",
            "kind": "LinkedField",
            "name": "panoFeed",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PanoPostEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PanoPost",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
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
                        "name": "content",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "createdAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "site",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "commentCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "owner",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
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
                      },
                      {
                        "alias": "recentComments",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "last",
                            "value": 3
                          }
                        ],
                        "concreteType": "PanoCommentConnection",
                        "kind": "LinkedField",
                        "name": "comments",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PanoComment",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              {
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
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "comments(last:3)"
                      },
                      (v5/*: any*/)
                    ],
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
              {
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
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": [
              "filter"
            ],
            "handle": "connection",
            "key": "PanoFeedFragment__panoFeed",
            "kind": "LinkedHandle",
            "name": "panoFeed"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "actor",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v4/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9bb57c5cb474ad130fef09afd0021a8e",
    "id": null,
    "metadata": {},
    "name": "PostListContainerQuery",
    "operationKind": "query",
    "text": "query PostListContainerQuery(\n  $filter: PanoPostFilter\n) {\n  viewer {\n    ...PanoFeedFragment_Vt7Yj\n    ...PanoFeed_viewer\n  }\n}\n\nfragment MoreOptions_post on PanoPost {\n  id\n  owner {\n    displayName\n    id\n  }\n}\n\nfragment MoreOptions_viewer on Viewer {\n  actor {\n    __typename\n    displayName\n    id\n  }\n}\n\nfragment PanoFeedFragment_Vt7Yj on Viewer {\n  panoFeed(first: 20, filter: $filter) {\n    edges {\n      cursor\n      node {\n        id\n        ...PostItem_post\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment PanoFeed_viewer on Viewer {\n  ...PostItem_viewer\n}\n\nfragment PostItem_post on PanoPost {\n  id\n  title\n  content\n  url\n  createdAt\n  site\n  commentCount\n  owner {\n    displayName\n    ...UserAvatar_user\n    id\n  }\n  ...PostUpvoteButton_post\n  ...MoreOptions_post\n  recentComments: comments(last: 3) {\n    nodes {\n      owner {\n        id\n        ...UserAvatar_user\n      }\n      id\n    }\n  }\n}\n\nfragment PostItem_viewer on Viewer {\n  ...MoreOptions_viewer\n  actor {\n    __typename\n    displayName\n    id\n  }\n}\n\nfragment PostUpvoteButton_post on PanoPost {\n  id\n  isUpvotedByViewer\n  upvoteCount\n}\n\nfragment UserAvatar_user on User {\n  displayName\n}\n"
  }
};
})();

(node as any).hash = "9c74048afe10dcf77c1f05b47a2da9ae";

export default node;
