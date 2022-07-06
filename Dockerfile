# base node image
FROM node:16-bullseye-slim as base

# set for base and all that inherit from it
ENV NODE_ENV=production

# Install all node_modules, including dev dependencies
FROM base as deps

RUN mkdir /app
WORKDIR /app

ADD package.json package-lock.json ./
RUN npm install --production=false --legacy-peer-deps

# Setup production node_modules
FROM base as production-deps

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json package-lock.json ./
RUN npm prune --production --legacy-peer-deps

# Build the app
FROM base as build

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
ADD . .

CMD ["node", "node_modules/.bin/remix-serve", "build"]
