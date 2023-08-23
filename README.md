# @kampus/monorepo

kamp.us web projects & packages

- sozluk: turkce terimler sozlugu - https://sozluk.dev.kamp.us
- pano: link & bilgi & soru cevap paylasim platformu - https://pano.dev.kamp.us
- gql: https://gql.dev.kamp.us/graphql
- pasaport: kampus icin kullanici bilgileri & [centralized auth](https://sozluk.dev.kamp.us/centralized-auth)
  servisi - https://pasaport.dev.kamp.us
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

- Add the following text block
  to [your `/etc/hosts` file](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/).

```text
127.0.0.1 localhost.kamp.us
127.0.0.1 pasaport.localhost.kamp.us
127.0.0.1 pano.localhost.kamp.us
127.0.0.1 sozluk.localhost.kamp.us
127.0.0.1 gql.localhost.kamp.us
```

### 3. Setting up `.env` files

- Duplicate `.env.example` files and rename them as `.env` in the following
  folders: `db/prisma`, `apps/gql`, `apps/kampus`, `apps/pasaport`.

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
# Runs "gql", "kampus" and "pasaport" apps so the platform can be alive with 1 command.
npm run web
```

- Now you can go to [localhost.kamp.us:3000](localhost.kamp.us:3000) to see it live. 🚀

```sh
# Runs all "dev" commands on each package inside the workspace
npm run dev
```

```sh
# Runs only "gql" server so backend work can be done separetly.
npm run gql
```

### 6. Logging in on development server(optional)

#### 6.1 GitHub

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
GITHUB_ID=<Your_Client_ID>
GITHUB_SECRET=<Your_Client_Secret>
```

- Now you can use `Sign in with GitHub` on development server.

<!---

#### 6.2 Discord

- Go to [Applications page](https://discord.com/developers/applications) on Discord.
- Click on `New Application`.
  - Name: "you can choose any name"
  - Click on `Create`.
- Go to `OAuth2` on the left sidebar.
- Click on `Reset Secret` to generate secret key.
- Click on `Add Redirect` and enter `http://pasaport.localhost.kamp.us:3001/auth/callback/discord`
- Save changes.
- Make the following changes to the corresponding files.

```sh
# apps/kampus, apps/pasaport
DISCORD_ID=<Your_Client_ID>
DISCORD_SECRET=<Your_Client_Secret>
```

- Now you can use `Sign in with Discord` on development server.

#### 6.3 Twitch

- Go to [Developer Applications page](https://dev.twitch.tv/console/apps) on Twitch.
- Click on `Register Your Application`.
  - Name: "you can choose any name"
  - OAuth Redirect URLs: https://pasaport.localhost.kamp.us:3001/auth/callback/twitch
  - Category: Website Integration
- Click on `Create`.
- Click on `Manage` for your application.
- Click on `New Secret`.

- Make the following changes to the corresponding files.

```sh
# apps/kampus, apps/pasaport
TWITCH_ID=<Your_Client_ID>
TWITCH_SECRET=<Your_Client_Secret>
```

- Now you can use `Sign in with Twitch` on development server.

-->

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

## Docker Setup

### Dockerfile

- We use a multi-stage build process to separate the building of applications from the final production image. This
  ensures smaller and more optimized production images.
- We build three services: `kampus`, `gql`, and `pasaport`. Each service has its dedicated builder stage followed by its
  execution stage.
- The `node:18-bullseye-slim` image is used to keep the final production images lean.

### Docker Compose

- We have four primary services: `mysql`, `kampus`, `gql`, and `pasaport`.
- `mysql` is the database service. We ensure that its authentication is set correctly and ports are mapped to allow for
  local development access.
- The other three services are built using the project's Dockerfile. These services are exposed on ports 3000, 3001, and
  3002 respectively.
- If you want to run the services with Docker Compose, copy the docker-compose.dev.yml file to docker-compose.yml. This
  file is ignored by Git to prevent accidental commits of sensitive information such as secrets and passwords. You will
  need to update the environment variables in this file to match your local environment.

```sh
cp docker-compose.dev.yml docker-compose.yml
cp .env.example .env
```

## Running a Fully Clean Build with Docker Compose

- To build the images and run the containers, run the following command:

```sh
docker-compose up --build -d
```

- To stop the containers, run the following command:

```sh
docker-compose down
```

## Running a Fully Clean Build with Docker

- Build and start the services, ensuring Docker Compose builds the images from scratch without using any cache.

```sh
docker-compose up --build --force-recreate
```