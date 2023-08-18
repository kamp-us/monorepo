# syntax = docker/dockerfile:1.2  
FROM node:18 AS base
WORKDIR /app
RUN npm install --global turbo
COPY . .
#RUN npm install

FROM base AS kampus-prune
RUN turbo prune --scope=@kampus-apps/kampus --docker

FROM base AS gql-prune
RUN turbo prune --scope=@kampus-apps/gql --docker

FROM base AS pasaport-prune
RUN turbo prune --scope=@kampus-apps/pasaport --docker

FROM node:18-bullseye-slim as kampus-build
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=kampus-prune /app/out/json .
COPY --from=kampus-prune /app/out/package-lock.json ./package-lock.json
COPY /tsconfig.json tsconfig.json
RUN npm install

COPY --from=kampus-prune /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo build

FROM node:18 AS gql-build
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=gql-prune /app/out/json .
COPY --from=gql-prune /app/out/package-lock.json ./package-lock.json
COPY /tsconfig.json tsconfig.json
RUN npm install

COPY --from=gql-prune /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo build

FROM node:18-bullseye-slim AS pasaport-build
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=pasaport-prune /app/out/json .
COPY --from=pasaport-prune /app/out/package-lock.json ./package-lock.json
COPY /tsconfig.json tsconfig.json
RUN npm install

COPY --from=pasaport-prune /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo build

# kampus stage - the dev server
FROM node:18-bullseye-slim as kampus
COPY --from=kampus-build /app .
EXPOSE 3000
CMD ["npm", "run", "dev", "-w", "@kampus-apps/kampus"]

# gql stage - the dev server
FROM node:18 as gql
COPY --from=gql-build /app .
EXPOSE 3002
CMD ["npm", "run", "dev", "-w", "@kampus-apps/gql"]

# pasaport stage - the dev server
FROM node:18-bullseye-slim as pasaport
COPY --from=pasaport-build /app .
EXPOSE 3001
CMD ["npm", "run", "dev", "-w", "@kampus-apps/pasaport"]