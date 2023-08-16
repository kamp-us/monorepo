# syntax = docker/dockerfile:1.2  
FROM node:18 AS base
WORKDIR /app
RUN npm install --global turbo
COPY . .

# kampus-builder stage, use "turbo" to get incremental builds
FROM base AS kampus-builder
# Prune the workspace
RUN turbo prune --scope=@kampus-apps/kampus --docker
RUN npm install
# Build the project
RUN npx turbo build --filter=kampus...

# gql-builder stage, use "turbo" to get incremental builds
FROM base AS gql-builder
# Prune the workspace
RUN turbo prune --scope=@kampus-apps/gql --docker
# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY turbo.json turbo.json
RUN npm install
# Build the project
RUN npx turbo build --filter=gql...

# pasaport-builder stage, use "turbo" to get incremental builds
FROM base AS pasaport-builder
# Prune the workspace
RUN turbo prune --scope=@kampus-apps/pasaport --docker
# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY turbo.json turbo.json
RUN npm install
# Build the project
RUN npx turbo build --filter=pasaport...

# kampus stage - the dev server
FROM node:18-bullseye-slim as kampus
COPY --from=kampus-builder /app .
EXPOSE 3000
CMD ["npm", "run", "dev", "-w", "@kampus-apps/kampus"]

# gql stage - the dev server
FROM node:18-bullseye-slim as gql
COPY --from=gql-builder /app .
EXPOSE 3002
CMD ["npm", "run", "dev", "-w", "@kampus-apps/gql"]

# pasaport stage - the dev server
FROM node:18-bullseye-slim as pasaport
COPY --from=pasaport-builder /app .
EXPOSE 3001
CMD ["npm", "run", "dev", "-w", "@kampus-apps/pasaport"]