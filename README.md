# @kampus/monorepo

kamp.us web projects & packages

- sozluk: turkce terimler sozlugu - https://sozluk.dev.kamp.us
- pano: link & bilgi & soru cevap paylasim platformu - https://pano.dev.kamp.us
- gql: https://gql.dev.kamp.us/graphql
- pasaport: kampus icin kullanici bilgileri & [centralized auth](https://sozluk.dev.kamp.us/centralized-auth) servisi - https://pasaport.dev.kamp.us
- storybook: @kampus/ui paketi icin hosted storybook - https://ui.dev.kamp.us

## IMPORTANT NOTE

This repository is under heavy development, if you want to contribute either go
through `package.json` file of each workspace and start familiarizing yourself
with the technologies we are using or join our [discord server](https://discord.gg/kampus)
and say hi to us at #kampus-projects channel.

## Getting started

### 1) Cloning the project

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
npm install
```

### 2) Modifying `hosts` file

- Add the following text block to [your `/etc/hosts` file](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/).

```text
127.0.0.1 localhost.kamp.us
127.0.0.1 pasaport.localhost.kamp.us
127.0.0.1 pano.localhost.kamp.us
127.0.0.1 sozluk.localhost.kamp.us
127.0.0.1 gql.localhost.kamp.us
```

### 3) Setting up `.env` files

- Duplicate `.env.example` files and rename them as `.env` in the following folders: `db/prisma`, `apps/gql`, `apps/kampus`, `apps/pasaport`.

### 4) Prisma Setup and Database Configuration

- Build required packages(`sozluk` and `prisma client`). (It may fail, but it's fine, continue with the next step.)

```sh
npx turbo build
```

- Move to `db/prisma` folder.

```sh
cd db/prisma
```

- Build/start the container. (You should have docker installed.)

```sh
docker-compose up --build
```

- Open up another terminal. Move to `db/prisma` folder. (docker-compose will keep running on previous terminal.)

```sh
cd db/prisma
```

- Generate artifacts. (e.g. Prisma Client)

```sh
npm run prisma:generate
```

- Push the Prisma schema state to the database.

```sh
npm run prisma:push
```

### 5) Running dev servers

- Open up 3 terminals, and run the commands below on each.

```sh
npm run dev -w @kampus-apps/kampus
```

```sh
npm run dev -w @kampus-apps/gql
```

```sh
npm run dev -w @kampus-apps/pasaport
```

- Now you can go to [localhost.kamp.us:3000](localhost.kamp.us:3000) to see it live. 🚀

### 6) Logging in with GitHub on development server(optional)

- Go to [OAuth Apps page](https://github.com/settings/developers) on GitHub.
- Click on `New OAuth App`.
  - Application name: "you can choose any name"
  - Homepage URL: http://pasaport.localhost.kamp.us:3001/
  - Authorization callback URL: http://pasaport.localhost.kamp.us:3001/auth/callback/github
- Click on `Register Application`.
- On the application page, click on `Generate a new client secret`.
- Make the following changes to the corresponding files.

```sh
# apps/kampus, apps/pasaport
GITHUB_ID=<Your Client ID>
GITHUB_SECRET=<Client secret you generated>
```

- Now you can use `Sign in with GitHub` on development server.

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
