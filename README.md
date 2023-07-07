# @kampus/monorepo

kamp.us web projects & packages

## Before starting

- The languages we use in this repo:
  - Typescript
    - [remix.run](https://remix.run) - a react web application framework
    - [next.js](https://nextjs.org/) - a react framework.
- Join our discord at https://discord.kamp.us
- We use `#kampus-projects` channel for onboarding people to the project.
- Talk to us so we can figure out a plan together what would be the best way
  for you to contribute to the project.
- For any questions use this channel so we can help you.

## How to start

- Fork `kamp-us/monorepo` under your personal account.
  - eg: `usirin/monorepo`
- Clone the project to your local computer:

```
// Download Repository
git clone git@github.com:kamp-us/monorepo.git
// Move into repository
cd monorepo
```

## Structure

- `/apps`: services & apps
  - `/gql`: backend service for the applications
  - `/kampus`: home of kampus, where you can find sozluk and pano
  - `/ui`: all the ui elements source with storybook
- `/db`: packages that is relevant to database
  - `/prisma`: prisma client for kampus mysql db
- '/config': packages that is relevant to configuration
  - `/eslint`: common eslint configuration.
- `/packages`: internal (and maybe external in the future) npm packages
  - `/relay`: common relay configuration
  - `/sozluk-content`: where contents of sozluk are
  - `/tailwind`: common tailwind configuration as a tailwind plugin
  - `/ui`: common ui elements

These folders are [registered as workspaces in package.json](package.json#L4-L7)

## Running the projects

## Use Correct Node Version

If you haven't already install [Volta](https://volta.sh), you can install install it with:

```sh
curl https://get.volta.sh | bash
```

### Setup projects

Install dependencies and build all projects.

```
// Install all the dependencies use -w or --workspace for workspace specific installs
npm install
// Builds all the applications in the monorepo
npx turbo build
```

## Documentation for each app & package

### Apps

- [pano](./apps/pano/README.md)

### Packages

- [kampus-ui](./packages/kampus-ui/README.md)
