# syntax = docker/dockerfile:1

# base-node stage contains the environment variables and the node image with slim OS.
FROM node:18 AS node-image
# base-slim-node stage contains the environment variables and the node image with slim OS.
FROM node:18-bullseye-slim AS node-slim-image
# base-distroless stage contains the environment variables and the distroless image.
FROM gcr.io/distroless/nodejs18-debian11 AS node-distroless-image

# Base stage, install turbo and copy the project
FROM node-slim-image AS base
WORKDIR /app
RUN npm install --global turbo
COPY . .

# kampus-prune stage, use "turbo" to get incremental builds and prune the workspace
FROM base AS kampus-prune
RUN turbo prune --scope=@kampus-apps/kampus --docker

# gql-prune stage, use "turbo" to get incremental builds and prune the workspace
FROM base AS gql-prune
RUN turbo prune --scope=@kampus-apps/gql --docker

# pasaport-prune stage, use "turbo" to get incremental builds and prune the workspace
FROM base AS pasaport-prune
RUN turbo prune --scope=@kampus-apps/pasaport --docker

# kampus-builder stage, use "turbo" to build the project incrementally and get incremental builds
FROM node-slim-image as kampus-builder
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=kampus-prune /app/out/json .
COPY --from=kampus-prune /app/out/package-lock.json ./package-lock.json
COPY /tsconfig.json tsconfig.json
RUN npm install
COPY --from=kampus-prune /app/out/full/ .
COPY .env ./apps/pasaport/.env
COPY turbo.json turbo.json
RUN npx turbo build

# python, g++, make, etc. are required for gql dependencies. node:18 is used as base image
FROM node-image AS gql-builder
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=gql-prune /app/out/json .
COPY --from=gql-prune /app/out/package-lock.json ./package-lock.json
COPY /tsconfig.json tsconfig.json
RUN npm install
COPY --from=gql-prune /app/out/full/ .
COPY --from=gql-prune /app/out/full/apps/gql/.env.example ./apps/gql/.env
COPY .env ./apps/pasaport/.env
COPY turbo.json turbo.json
RUN npx turbo build

# pasaport-builder stage, use "turbo" to build the project incrementally and get incremental builds
FROM node-slim-image AS pasaport-builder
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=pasaport-prune /app/out/json .
COPY --from=pasaport-prune /app/out/package-lock.json ./package-lock.json
COPY /tsconfig.json tsconfig.json
RUN npm install
COPY --from=pasaport-prune /app/out/full/ .
COPY .env ./apps/pasaport/.env
COPY turbo.json turbo.json
RUN npx turbo build

# Use distroless to reduce the minimum size of the image and reduce the attack surface
#If you want to use npm, use the node:18-bullseye-slim image (prisma doesn't work with alpine arm64)
# kampus stage - the dev server.
FROM node-distroless-image as kampus
COPY tsconfig.json ./tsconfig.json
COPY --from=kampus-builder /app/apps/kampus/next.config.mjs .
COPY --from=kampus-builder /app/apps/kampus/package.json .
COPY --from=kampus-builder /app/apps/kampus/.next/standalone ./
COPY --from=kampus-builder /app/apps/kampus/.next/static ./apps/kampus/.next/static
COPY --from=kampus-builder /app/apps/kampus/public ./apps/kampus/public
CMD ["apps/kampus/server.js"]

# gql stage - the dev server.
FROM node-distroless-image as gql
COPY tsconfig.json ./tsconfig.json
COPY --from=gql-builder /app/apps/gql/next.config.mjs .
COPY --from=gql-builder /app/apps/gql/package.json .
COPY --from=gql-builder /app/apps/gql/.next/standalone ./
COPY --from=gql-builder /app/apps/gql/.next/static ./apps/gql/.next/static
CMD ["apps/gql/server.js"]

# pasaport stage - the dev server.
FROM node-distroless-image as pasaport
COPY tsconfig.json ./tsconfig.json
COPY --from=pasaport-builder /app/apps/pasaport/next.config.mjs .
COPY --from=pasaport-builder /app/apps/pasaport/package.json .
COPY --from=pasaport-builder /app/apps/pasaport/.next/standalone ./
COPY --from=pasaport-builder /app/apps/pasaport/.next/static ./apps/pasaport/.next/static
CMD ["apps/pasaport/server.js"]

# ssl-proxy stage - the dev server.
FROM node:18-bullseye-slim as proxy
WORKDIR /app

RUN npm i -g local-ssl-proxy
RUN npm i -g concurrently

# keep running
CMD ["concurrently", "local-ssl-proxy --target 3000 --source 5000", "local-ssl-proxy --target 3001 --source 5001", "local-ssl-proxy --target 4000 --source 5002"]