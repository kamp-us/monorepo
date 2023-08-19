# syntax = docker/dockerfile:1
FROM node:18-bullseye-slim AS base
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

FROM node:18-bullseye-slim as kampus-builder
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=kampus-prune /app/out/json .
COPY --from=kampus-prune /app/out/package-lock.json ./package-lock.json
COPY /tsconfig.json tsconfig.json
RUN npm install
COPY --from=kampus-prune /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo build

# python, g++, make, etc. are required for gql dependencies. node:18 is used as base image
FROM node:18 AS gql-builder
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=gql-prune /app/out/json .
COPY --from=gql-prune /app/out/package-lock.json ./package-lock.json
COPY /tsconfig.json tsconfig.json
RUN npm install
COPY --from=gql-prune /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo build

FROM node:18-bullseye-slim AS pasaport-builder
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=pasaport-prune /app/out/json .
COPY --from=pasaport-prune /app/out/package-lock.json ./package-lock.json
COPY /tsconfig.json tsconfig.json
RUN npm install
COPY --from=pasaport-prune /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo build

# Use distroless to reduce the minimum size of the image and reduce the attack surface
#If you want to use npm, use the node:18-bullseye-slim image (prisma doesn't work with alpine arm64)
# kampus stage - the dev server.
FROM gcr.io/distroless/nodejs18-debian11 as kampus
ARG NODE_ENV=development
COPY --from=kampus-builder /app .
EXPOSE 3000
CMD ["node_modules/next/dist/bin/next", "dev", "-p", "3000"]
#CMD ["npm", "run", "dev", "-w", "@kampus-apps/kampus"]

# gql stage - the dev server.
FROM gcr.io/distroless/nodejs18-debian11 as gql
COPY --from=gql-builder /app .
EXPOSE 3002
CMD ["node_modules/next/dist/bin/next", "dev", "-p", "4000"]
#CMD ["npm", "run", "dev", "-w", "@kampus-apps/gql"]

# pasaport stage - the dev server.
FROM gcr.io/distroless/nodejs18-debian11 as pasaport
COPY --from=pasaport-builder /app .
EXPOSE 3001
CMD ["node_modules/next/dist/bin/next", "dev", "-p", "3001"]
#CMD ["npm", "run", "dev", "-w", "@kampus-apps/pasaport"]

