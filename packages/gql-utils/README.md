# `@kampus/gql-utils`

An internal package to maintain our graphql related utilities.

## Installation

This package can only be installed inside another workspace of this monorepo.
Following command will not work outside of this project:

```sh
npm install @kapmus/gql-utils --save
```

Then make sure it is registered to the related workspace package's package.json:

```json
{
  "dependencies": {
    "@kampus/gql-utils": "*"
  }
}
```

## What?

Group of tools that we write to help working with our [`@kampus/gql`]
application living at https://gql.dev.kamp.us/graphql (click to link to
discover our graphql schema)

## Global Object Identification

**Related documents:**

- https://relay.dev/docs/guides/graphql-server-specification/#object-identification
- https://graphql.org/learn/global-object-identification/

### Story

In order for relay to work properly,
a graphql server needs to implement a `Node` interface and `Query.node` resolver:

```graphql
interface Node {
  id: ID!
}

type User implements Node {
  id: ID!
  username: String!
}

type SozlukTerm implements Node {
  id: ID!
  title: String!
}

type Query {
  node(id: ID!): Node
}
```

This way relay client can use the `Query.node` resolver to resolve any
type that implements the `Node` interface:

```graphql
query UserWithQueryNode {
  # since both User and Post types implement the Node interface
  # we can use the inline fragment syntax to fetch different types
  node(id: "base-64-opaque-id") {
    id
    ... on User {
      username
    }

    ... on SozlukTerm {
      title
    }
  }
}
```

The `id` argument itself is actually responsible for storing the type we want
to fetch: It's a `base64` representation of `__typename:id` pair:
`User:clkd3h9hi0000q1ebwf2j6bfc`, `PanoPost:clkd3h9is0004q1ebid1prq8z`,
`SozlukTerm:deployment`, etc.

### [`@kampus/gql-utils/global-id`](./global-id)

Set of utilities to work with global ids in a graphql server.

#### Glossary

- `GlobalID`: an opaque `base64` string created from combining `__typename` and `id`
- `ResolvedGlobalID`: An object representation of a `GlobalID` after we `parse` it.

#### **`stringify`**

Takes a `__typename` and an `id` for that type, and returns a `GlobalID`:

```typescript
import { stringify } from "@kampus/gql-utils/global-id";

const id = stringify("SozlukTerm", "deployment");
// => U296bHVrVGVybTpkZXBsb3ltZW50
```

#### **`parse`**

Takes a `__typename` and an `id` for that type, and returns a `GlobalID`:

```typescript
import { parse, stringify } from "@kampus/gql-utils/global-id";

const id = stringify("SozlukTerm", "deployment");
// => U296bHVrVGVybTpkZXBsb3ltZW50

const resolvedID = parse(id);
// => { type: "SozlukTerm", value: "deployment" }
```

## Prisma tools

### `createPrismaLoader`

A factory function to create a new [`DataLoader`] instance to work with a [prisma model]:

```ts
function createPrismaLoader<TPrismaModel>(
  model: TPrismaModel,
  identifier: string,
  onComplete: (models: TPrismaModel[]) => void
): DataLoader<string, TPrismaModel, string>;
```

- `model: TPrismaModel`: one of the models from our prisma db.
- `identifier: string`: the name of the field we want to be "loading" against.
- `onComplete?: (models: TPrismaModel[]) => void`: an optional function to be called
  after loader fetches data from prisma. can be used to register data into
  other dataloaders.

#### Example

```ts
import { createPrismaLoader } from "@kampus/gql-utils";
import { prisma } from "@kampus/prisma";
// in the end this function returns a DataLoader instance.
import DataLoader from "dataloader";

// create a loader that can be used to fetch users by their ids
const userByID = createPrismaLoader(prisma.user, "id");
const user = userByID.load("some-id");

// create a loader that can be used to fetch users by their usernames
const userByUsername = createPrismaLoader(prisma.user, "username");
const user = userByUsername.load("testuser");
```

### `createPrismaConnectionLoader`

A factory function to create a new [`DataLoader`] instance that returns a
[Relay Connection] that consists of multiple [prisma model]s.

We use [@devoxa/prisma-relay-cursor-connection] npm package to handle the
prisma pagination. But our public api is pretty similar to `createPrismaDataLoader`.

```ts
function createPrismaConnectionLoader<TPrismaModel>(
  model: TPrismaModel,
  identifier: string,
  onComplete: (models: TPrismaModel[][]) => void
): DataLoader<GQLConnectionKey, Connection<TPrismaModel>, string>;
```

- `model: TPrismaModel`: one of the models from our prisma db.
- `identifier: string`: the name of the field we want to be "loading" against.
- `onComplete?: (models: TPrismaModel[][]) => void`: an optional function to be called
  after loader fetches data from prisma. can be used to register data into
  other dataloaders.

#### Example

```ts
import { ConnectionKey, createPrismaConnectionLoader } from "@kampus/gql-utils";
import { prisma } from "@kampus/prisma";

// create a loader that can be used to fetch users by their ids
const postsByUserID = createPrismaConnectionLoader(prisma.post, "userID");

// we use ConnectionKey factory to load paginated data
const userPosts = postsByUserID.load(new ConnectionKey("some-user-id", { first: 10 }));
// => Connection<Post>

// we don't have to specify a foreign key to match against if we want to return
// all items with pagination. Set it to `null` to achieve that.
const allPosts = createPrismaConnectionLoader(prisma.post, null);
const posts = allPosts.load(new ConnectionKey(null, { last: 10 }));
```

### Loading same data with different loaders

Sometimes we can load the same data with using different loaders, our
[`Query.user` query] accepts a [`UserInput`] as its arguments, which in the end
it allows us to load users both by `id` and `username`, so we want to make sure
if a `user` is loaded by using an id, it's also registered to dataloader that
fetches users by their username. so that we don't double fetch.

We can use `onComplete` argument of `createPrismaLoader` which helps us to
achieve [this example] from [`DataLoader`] documentation:

```ts
import { createPrismaLoader } from "@kampus/gql-utils";
import { prisma } from "@kampus/prisma";

// load user by id, once they ar loaded, update byUsername loaders cache
// so that it's not gonna fetch the same data in the same request.
const byID = createPrismaLoader(prisma.user, "id", (users) => {
  for (const user of users) {
    byUsername.prime(user.username, user);
  }
});

const byUsername = createPrismaLoader(prisma.user, "username", () => {
  for (const user of users) {
    byID.prime(user.id, user);
  }
});

const userByID = userByID.load("some-id");
const userByUsername = userByUsername.load("testuser");
```

[`DataLoader`]: https://github.com/graphql/dataloader
[`Query.user` query]: ../../apps/gql/schema/schema.graphql#L2
[`UserInput`]: ../../apps/gql/schema/schema.graphql#L19-L22
[this example]: https://github.com/graphql/dataloader/tree/main#loading-by-alternative-keys
[prisma model]: ../../db/prisma/schema.prisma
[Relay Connection]: https://relay.dev/graphql/connections.htm
[@devoxa/prisma-relay-cursor-connection]: https://www.npmjs.com/package/@devoxa/prisma-relay-cursor-connection
[`@kampus/gql`]: ../../apps/gql
