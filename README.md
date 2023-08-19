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

- Fork `kamp-us/monorepo` under your personal account.
    - eg: `usirin/monorepo`
- Clone the project to your local computer:

```sh
# Download Repository
git clone git@github.com:kamp-us/monorepo.git
# Move into repository
cd monorepo
```

## Structure

- `/apps`: services & apps
- `/db`: packages that is relevant to database
- `/config`: packages that is relevant to configuration
- `/packages`: internal (and maybe external in the future) npm packages

These folders are [registered as workspaces in package.json](package.json#L4-L7)

## Running the projects

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
  file is ignored by Git to prevent accidental commits of sensitive information such as secrets and passwords.

```sh
cp docker-compose.dev.yml docker-compose.yml
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