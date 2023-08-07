import { DateResolver, DateTimeResolver } from "graphql-scalars";

import { ConnectionKey } from "@kampus/gql-utils";
import { type ConnectionArguments, type PageInfo } from "@kampus/gql-utils/connection";
import { parse, stringify } from "@kampus/gql-utils/global-id";
import { type User } from "@kampus/prisma";
import { assertNever } from "@kampus/std";
import { type Dictionary } from "@kampus/std/dictionary";

import { InvalidInput, NotAuthorized } from "~/features/errors";
import {
  transformPanoComment,
  transformPanoCommentConnection,
  transformPanoPost,
  transformPanoPostConnection,
  transformPostUpvote,
} from "~/loaders/pano";
import { transformSozlukTerm, transformSozlukTermsConnection } from "~/loaders/sozluk";
import { transformUser } from "~/loaders/user";
import { type Resolvers, type ResolversInterfaceTypes } from "../types.generated";

type NodeTypename = ResolversInterfaceTypes<Dictionary>["Node"]["__typename"];

const transformPageInfo = (type: NodeTypename, pageInfo: PageInfo) => ({
  ...pageInfo,
  startCursor: stringify(type, pageInfo.startCursor ?? ""),
  endCursor: stringify(type, pageInfo.endCursor ?? ""),
});

const parseConnectionArgs = (args: ConnectionArguments) => ({
  ...args,
  after: args.after ? parse(args.after).value : null,
  before: args.before ? parse(args.before).value : null,
});

const errorFieldsResolver = {
  message: (error: { message: string }) => error.message,
};

export const resolvers = {
  Date: DateResolver,
  DateTime: DateTimeResolver,
  Node: {},
  Actor: {},

  Query: {
    // @see Viewer field resolvers
    viewer: () => ({ actor: null, panoFeed: null }),
    // @see SozlukQuery field resolvers
    sozluk: () => ({ term: null, terms: null }),
    // @see PanoQuery field resolvers
    pano: () => ({ post: null, posts: [], allPosts: null }),

    node: async (_, args, { loaders }) => {
      const id = parse<NodeTypename>(args.id);

      switch (id.type) {
        case "User":
          return transformUser(await loaders.user.byID.load(id.value));
        case "SozlukTerm":
          return transformSozlukTerm(await loaders.sozluk.term.load(id.value));
        case "PanoPost":
          return transformPanoPost(await loaders.pano.post.byID.load(id.value));
        case "PanoComment":
          return transformPanoComment(await loaders.pano.comment.byID.load(id.value));
        default:
          return assertNever(id.type);
      }
    },
    user: async (_, args, { loaders }) => {
      let user: User | null = null;

      if (args.id) {
        user = await loaders.user.byID.load(parse(args.id).value);
      } else if (args.username) {
        user = await loaders.user.byUsername.load(args.username);
      }

      if (!user) {
        return null;
      }

      return transformUser(user);
    },
  },
  Viewer: {
    actor: async (_viewer, _args, { loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return null;
      }

      const user = await loaders.user.byID.load(session.user.id);
      if (!user) {
        return null;
      }

      return transformUser(user);
    },
    panoFeed: async (_, args, { loaders }) => {
      const posts = await loaders.pano.post.all.load(
        new ConnectionKey(null, parseConnectionArgs(args))
      );

      return transformPanoPostConnection(posts);
    },
  },

  SozlukQuery: {
    term: async (_, args, { loaders }) =>
      transformSozlukTerm(await loaders.sozluk.term.load(args.id)),
    terms: async (_, args, { loaders }) => {
      return transformSozlukTermsConnection(
        await loaders.sozluk.terms.load(parseConnectionArgs(args))
      );
    },
  },
  SozlukTerm: {
    id: (term) => stringify("SozlukTerm", term.id),
    title: (term) => term.title,
    body: (term) => term.body,
    tags: (term) => term.tags,
  },
  SozlukTermBody: {
    raw: (body) => body.raw,
    code: (body) => body.code,
    html: (body) => body.html,
  },
  SozlukTermConnection: {
    edges: (connection) => connection.edges,
    pageInfo: (connection) => transformPageInfo("SozlukTerm", connection.pageInfo),
    totalCount: (connection) => connection.totalCount,
  },
  SozlukTermEdge: {
    node: (edge) => edge.node,
    cursor: (edge) => stringify("SozlukTerm", edge.cursor),
  },
  PanoQuery: {
    post: async (_, args, { loaders }) =>
      transformPanoPost(await loaders.pano.post.byID.load(args.id)),
    posts: async (_, args, { loaders }) => {
      const posts = await loaders.pano.post.byID.loadMany(args.ids);

      return posts.map((post) => {
        return post instanceof Error ? null : transformPanoPost(post);
      });
    },
  },
  PanoPost: {
    id: (post) => stringify("PanoPost", post.id),
    title: (post) => post.title,
    url: (post) => post.url,
    content: (post) => post.content,
    site: (post) => post.site,
    owner: async (parent, _, { loaders }) => {
      const post = await loaders.pano.post.byID.load(parent.id);
      const user = await loaders.user.byID.load(post.userID);
      return transformUser(user);
    },
    comments: async (post, args, { loaders }) => {
      return transformPanoCommentConnection(
        await loaders.pano.comment.byPostID.load(new ConnectionKey(post.id, args))
      );
    },
    commentCount: (post, _, { loaders }) => {
      return loaders.pano.comment.countByPostID.load(new ConnectionKey(post.id));
    },
    upvoteCount: (post, _, { loaders }) => {
      return loaders.pano.upvote.countByPostID.load(new ConnectionKey(post.id));
    },
    createdAt: (post) => post.createdAt,
  },
  PanoPostConnection: {
    nodes: (connection) => connection.nodes,
    edges: (connection) => connection.edges,
    pageInfo: (connection) => transformPageInfo("PanoPost", connection.pageInfo),
    totalCount: (connection) => connection.totalCount,
  },
  PanoPostEdge: {
    node: (edge) => edge.node,
    cursor: (edge) => stringify("PanoPost", edge.cursor),
  },
  PageInfo: {
    hasNextPage: (pageInfo) => pageInfo.hasNextPage,
    hasPreviousPage: (pageInfo) => pageInfo.hasPreviousPage,
    startCursor: (pageInfo) => pageInfo.startCursor,
    endCursor: (pageInfo) => pageInfo.endCursor,
  },
  User: {
    id: (user) => stringify("User", user.id),
    username: (u) => u.username,
    displayName: (u) => u.displayName,
    panoPosts: async (user, args, { loaders }) =>
      transformPanoPostConnection(
        await loaders.pano.post.byUserID.load(new ConnectionKey(user.id, args))
      ),
  },
  PanoComment: {
    id: (comment) => stringify("PanoComment", comment.id),
    content: (comment) => comment.content,
    owner: async (comment, _, { loaders }) => {
      const model = await loaders.pano.comment.byID.load(comment.id);
      const user = await loaders.user.byID.load(model.userID);
      return transformUser(user);
    },
    post: async (comment, _, { loaders }) => {
      const model = await loaders.pano.comment.byID.load(comment.id);
      const post = await loaders.pano.post.byID.load(model.postID);
      return transformPanoPost(post);
    },
    parent: async (comment, _, { loaders }) => {
      const model = await loaders.pano.comment.byID.load(comment.id);
      if (!model.parentID) {
        return null;
      }
      const parent = await loaders.pano.comment.byID.load(model.parentID);
      return transformPanoComment(parent);
    },
    comments: async (comment, args, { loaders }) => {
      return transformPanoCommentConnection(
        await loaders.pano.comment.byParentID.load(new ConnectionKey(comment.id, args))
      );
    },
    commentCount: (comment, _, { loaders }) => {
      return loaders.pano.comment.countByParentID.load(new ConnectionKey(comment.id));
    },
    upvoteCount: (comment, _, { loaders }) => {
      return loaders.pano.upvote.countByCommentID.load(new ConnectionKey(comment.id));
    },
    createdAt: (comment) => comment.createdAt,
  },
  PanoCommentEdge: {
    node: (edge) => edge.node,
    cursor: (edge) => stringify("PanoComment", edge.cursor),
  },
  PanoCommentConnection: {
    nodes: (connection) => connection.nodes,
    edges: (connection) => connection.edges,
    pageInfo: (connection) => transformPageInfo("PanoComment", connection.pageInfo),
    totalCount: (connection) => connection.totalCount,
  },

  CreatePanoPostPayload: {}, // union
  UpdatePanoPostPayload: {}, // union
  RemovePanoPostPayload: {}, // union
  CreatePanoCommentPayload: {}, // union
  UpdatePanoCommentPayload: {}, // union
  RemovePanoCommentPayload: {}, // union
  CreatePostUpvotePayload: {}, // union
  RemovePostUpvotePayload: {}, // union

  UserError: {}, // interface

  InvalidInput: errorFieldsResolver,
  NotAuthorized: errorFieldsResolver,

  Mutation: {
    createPanoPost: async (_, { input }, { loaders, actions, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return NotAuthorized();
      }

      if (!input.url && !input.content) {
        return InvalidInput("Either url or content is required");
      }

      const created = await actions.pano.post.create({ ...input, userID: session.user.id });
      return transformPanoPost(await loaders.pano.post.byID.load(created.id));
    },
    updatePanoPost: async (_, { input }, { actions, loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return NotAuthorized();
      }

      const id = parse(input.id);
      if (id.type !== "PanoPost") {
        return InvalidInput("wrong id");
      }

      const post = await loaders.pano.post.byID.load(id.value);
      if (post.userID !== session.user.id) {
        return NotAuthorized();
      }

      const updated = await actions.pano.post.update(id.value, input);
      return transformPanoPost(await loaders.pano.post.byID.clear(updated.id).load(updated.id));
    },
    removePanoPost: async (_, { input }, { actions, loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return NotAuthorized();
      }

      const id = parse(input.id);
      if (id.type !== "PanoPost") {
        return InvalidInput("wrong id");
      }

      const post = await loaders.pano.post.byID.load(id.value);
      if (post.userID !== session.user.id) {
        return NotAuthorized();
      }

      return transformPanoPost(await actions.pano.post.remove(id.value));
    },
    createPanoComment: async (_, { input }, { loaders, actions, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return NotAuthorized();
      }

      if (!input.postID && !input.content) {
        return InvalidInput("Either post or content is required");
      }

      const created = await actions.pano.comment.create({ ...input, userID: session.user.id });

      return transformPanoComment(await loaders.pano.comment.byID.load(created.id));
    },
    updatePanoComment: async (_, { input }, { actions, loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return NotAuthorized();
      }

      const id = parse(input.id);
      if (id.type !== "PanoComment") {
        return InvalidInput("wrong id");
      }

      const comment = await loaders.pano.comment.byID.load(id.value);
      if (comment.userID !== session.user.id) {
        return NotAuthorized();
      }

      const updated = await actions.pano.comment.update(id.value, input);
      return transformPanoComment(
        await loaders.pano.comment.byID.clear(updated.id).load(updated.id)
      );
    },
    removePanoComment: async (_, { input }, { actions, loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return NotAuthorized();
      }

      const id = parse(input.id);
      if (id.type !== "PanoComment") {
        return InvalidInput("wrong id");
      }

      const comment = await loaders.pano.comment.byID.load(id.value);
      if (comment.userID !== session.user.id) {
        return NotAuthorized();
      }

      return transformPanoComment(await actions.pano.comment.remove(id.value));
    },
    createPostUpvote: async (_, { input }, { actions, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return NotAuthorized();
      }

      return transformPostUpvote(
        await actions.pano.postUpvote.create({
          postID: input.postID,
          userID: session.user.id,
        })
      );
    },
    removePostUpvote: async (_, { input }, { actions, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return NotAuthorized();
      }

      return transformPostUpvote(
        await actions.pano.postUpvote.remove({
          postID: input.postID,
          userID: session.user.id,
        })
      );
    },
  },
} satisfies Resolvers;
