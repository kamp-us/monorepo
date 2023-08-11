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
  transformPanoUpvote,
} from "~/loaders/pano";
import { transformSozlukTerm, transformSozlukTermsConnection } from "~/loaders/sozluk";
import { transformUser } from "~/loaders/user";
import { type Resolvers, type ResolversInterfaceTypes } from "../types.generated";

type NodeTypename = ResolversInterfaceTypes<Dictionary>["Node"]["__typename"];
type UpvotableTypename = ResolversInterfaceTypes<Dictionary>["Upvotable"]["__typename"];

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
    pano: () => ({ post: null, posts: [], postsBySite: null, allPosts: null }),

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
        new ConnectionKey(null, parseConnectionArgs(args), { orderBy: { createdAt: "desc" } })
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
      transformPanoPost(await loaders.pano.post.byID.load(parse(args.id).value)),
    posts: async (_, args, { loaders }) => {
      const posts = await loaders.pano.post.byID.loadMany(args.ids.map((id) => parse(id).value));
      return posts.map((post) => {
        return post instanceof Error ? null : transformPanoPost(post);
      });
    },
    postsBySite: async (_, args, { loaders }) => {
      const posts = await loaders.pano.post.bySite.load(
        new ConnectionKey(args.site, parseConnectionArgs(args), { orderBy: { createdAt: "desc" } })
      );

      return transformPanoPostConnection(posts);
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

    isUpvotedByViewer: async (post, _, { loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return false;
      }

      const upvote = await loaders.pano.upvote.byUserAndPostID.load({
        userID: session?.user.id,
        postID: post.id,
      });

      return !!upvote;
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
    isUpvotedByViewer: async (comment, _, { loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return false;
      }

      const upvote = await loaders.pano.upvote.byUserAndCommentID.load({
        userID: session?.user.id,
        commentID: comment.id,
      });

      return !!upvote;
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
  PanoUpvote: {
    id: (upvote) => stringify("PanoUpvote", upvote.id),
    node: async (upvote, _, { loaders }) => {
      const model = await loaders.pano.upvote.byPostID.load(upvote.id);
      const post = await loaders.pano.post.byID.load(model.postID);
      return transformPanoPost(post);
    },
    owner: async (upvote, _, { loaders }) => {
      const model = await loaders.pano.upvote.byPostID.load(upvote.id);
      const user = await loaders.user.byID.load(model.userID);
      return transformUser(user);
    },
  },

  PanoPostError: {}, // union
  CreatePanoPostPayload: {
    edge: (payload) => payload.edge,
    error: (payload) => payload.error,
  },
  UpdatePanoPostPayload: {
    edge: (payload) => payload.edge,
    error: (payload) => payload.error,
  },
  RemovePanoPostPayload: {
    edge: (payload) => payload.edge,
    error: (payload) => payload.error,
  },
  PanoCommentError: {}, // union
  CreatePanoCommentPayload: {
    edge: (payload) => payload.edge,
    error: (payload) => payload.error,
  },
  UpdatePanoCommentPayload: {
    edge: (payload) => payload.edge,
    error: (payload) => payload.error,
  },
  RemovePanoCommentPayload: {
    edge: (payload) => payload.edge,
    error: (payload) => payload.error,
  },
  PanoUpvoteError: {}, // union
  CreatePanoUpvotePayload: {
    node: (payload) => payload.node,
    error: (payload) => payload.error,
  },
  RemovePanoUpvotePayload: {
    node: (payload) => payload.node,
    error: (payload) => payload.error,
  },

  UserError: {}, // interface
  Upvotable: {}, // interface

  InvalidInput: errorFieldsResolver,
  NotAuthorized: errorFieldsResolver,

  Mutation: {
    createPanoPost: async (_, { input }, { loaders, actions, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return { edge: null, error: NotAuthorized() };
      }

      if (!input.url && !input.content) {
        return { edge: null, error: InvalidInput("Either url or content is required") };
      }

      const node = await actions.pano.post
        .create({ ...input, userID: session.user.id })
        .then((created) => loaders.pano.post.byID.load(created.id))
        .then(transformPanoPost);

      return { edge: { cursor: node.id, node }, error: null };
    },
    updatePanoPost: async (_, { input }, { actions, loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return { edge: null, error: NotAuthorized() };
      }

      const id = parse(input.id);
      if (id.type !== "PanoPost") {
        return { edge: null, error: InvalidInput("wrong id") };
      }

      const post = await loaders.pano.post.byID.load(id.value);
      if (post.userID !== session.user.id) {
        return { edge: null, error: NotAuthorized() };
      }

      const node = await actions.pano.post
        .update(id.value, input)
        .then((updated) => loaders.pano.post.byID.clear(updated.id).load(updated.id))
        .then(transformPanoPost);

      return { edge: { node, cursor: node.id }, error: null };
    },
    removePanoPost: async (_, { input }, { actions, loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return { edge: null, error: NotAuthorized() };
      }

      const id = parse(input.id);
      if (id.type !== "PanoPost") {
        return { edge: null, error: InvalidInput("wrong id") };
      }

      const post = await loaders.pano.post.byID.load(id.value);
      if (post.userID !== session.user.id) {
        return { edge: null, error: NotAuthorized() };
      }

      const node = transformPanoPost(await actions.pano.post.remove(id.value));

      return { edge: { node, cursor: node.id }, error: null };
    },
    createPanoComment: async (_, { input }, { loaders, actions, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return { edge: null, error: NotAuthorized() };
      }

      const node = await actions.pano.comment
        .create({ ...input, postID: parse(input.postID).value, userID: session.user.id })
        .then((created) => loaders.pano.comment.byID.load(created.id))
        .then(transformPanoComment);

      return { edge: { node, cursor: node.id }, error: null };
    },
    updatePanoComment: async (_, { input }, { actions, loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return { edge: null, error: NotAuthorized() };
      }

      const id = parse(input.id);
      if (id.type !== "PanoComment") {
        return { edge: null, error: InvalidInput("wrong id") };
      }

      const comment = await loaders.pano.comment.byID.load(id.value);
      if (comment.userID !== session.user.id) {
        return { edge: null, error: NotAuthorized() };
      }

      const node = await actions.pano.comment
        .update(id.value, input)
        .then((updated) => loaders.pano.comment.byID.clear(updated.id).load(updated.id))
        .then(transformPanoComment);

      return { edge: { node, cursor: node.id }, error: null };
    },
    removePanoComment: async (_, { input }, { actions, loaders, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return { edge: null, error: NotAuthorized() };
      }

      const id = parse(input.id);
      if (id.type !== "PanoComment") {
        return { edge: null, error: InvalidInput("wrong id") };
      }

      const comment = await loaders.pano.comment.byID.load(id.value);
      if (comment.userID !== session.user.id) {
        return { edge: null, error: NotAuthorized() };
      }

      const node = transformPanoComment(await actions.pano.comment.remove(id.value));

      return { edge: { node, cursor: node.id }, error: null };
    },
    createPanoUpvote: async (_, { input }, { loaders, actions, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return { node: null, error: NotAuthorized() };
      }

      const { type, value } = parse<UpvotableTypename>(input.id);

      switch (type) {
        case "PanoPost": {
          let upvote = await loaders.pano.upvote.byUserAndPostID.load({
            postID: value,
            userID: session.user.id,
          });

          if (upvote) {
            return { node: null, error: InvalidInput() };
          }

          upvote = await actions.pano.postUpvote.create({ postID: value, userID: session.user.id });

          return { node: transformPanoUpvote(upvote), error: null };
        }
      }
    },
    removePanoUpvote: async (_, { input }, { loaders, actions, pasaport: { session } }) => {
      if (!session?.user?.id) {
        return { node: null, error: NotAuthorized() };
      }

      const { type, value } = parse<UpvotableTypename>(input.id);

      switch (type) {
        case "PanoPost": {
          const upvote = await loaders.pano.upvote.byUserAndPostID.load({
            postID: value,
            userID: session.user.id,
          });

          if (!upvote) {
            return { node: null, error: InvalidInput() };
          }

          await actions.pano.postUpvote.remove(upvote);

          return { node: transformPanoUpvote(upvote), error: null };
        }
        default: {
          return assertNever(type);
        }
      }
    },
  },
} satisfies Resolvers;
