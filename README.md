# @kampus/monorepo

kamp.us web projects & packages

- sozluk: turkce terimler sozlugu - https://sozluk.dev.kamp.us
- pano: link & bilgi & soru cevap paylasim platformu - https://pano.dev.kamp.us
- gql: https://gql.dev.kamp.us/graphql
- storybook: @kampus/ui paketi icin hosted storybook - https://ui.dev.kamp.us

## IMPORTANT NOTE

This repository is under heavy development, if you want to contribute either go
through `package.json` file of each workspace and start familiarizing yourself
with the technologies we are using or join our [discord server](https://discord.gg/kampus)
and say hi to us at #kampus-projects channel.

## Getting started

### 1. Cloning the project

- Fork `kamp-us/monorepo` under your personal account.
  - eg: `usirin/monorepo`
- Clone the project to your local computer:

```sh
# Download Repository
git clone git@github.com:kamp-us/monorepo.git
# Move into repository
cd monorepo
```

- Install dependencies.

```sh
npm ci
```

### 2. Modifying `hosts` file

- Add the following text block to [your `/etc/hosts` file](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/).

```text
127.0.0.1 localhost.kamp.us
127.0.0.1 pano.localhost.kamp.us
127.0.0.1 sozluk.localhost.kamp.us
127.0.0.1 gql.localhost.kamp.us
```

### 3. Setting up `.env` files

- Duplicate `.env.example` files and rename them as `.env` in the following folders: `db/prisma`, `apps/gql`, `apps/kampus`.

### 4. Prisma Setup and Database Configuration

- Move to `db/prisma` folder.

```sh
cd db/prisma
```

- Start the image. (You should have docker installed.)

```sh
docker-compose up -d
```

- Generate artifacts. (e.g. Prisma Client)

```sh
npm run prisma:generate
```

- Push the Prisma schema state to the database.

```sh
npm run prisma:push
```

- Run seed command to fill database with demo data.

```sh
npm run prisma:seed
```

### 5. Running dev servers

- Run the command below at the root folder.

```sh
# Runs "gql" and "kampus" apps so the platform can be alive with 1 command.
npm run web
```

- Now you can go to [localhost.kamp.us:3000](localhost.kamp.us:3000) to see it live. 🚀

```sh
# Runs all "dev" commands on each package inside the workspace
npm run dev
```

```sh
# Runs only "gql" server so backend work can be done separately.
npm run gql
```

## Structure

- `/apps`: services & apps
- `/db`: packages that is relevant to database
- `/config`: packages that is relevant to configuration
- `/packages`: internal (and maybe external in the future) npm packages

These folders are [registered as workspaces in package.json](package.json#L4-L7)

## Use Correct Node Version

If you haven't already install [Volta](https://volta.sh), you can install install it with:

```sh
curl https://get.volta.sh | bash
```
