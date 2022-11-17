# @kampus/monorepo

kamp.us web projects & packages

## Structure

- `/apps`: services & apps
- `/packages`: internal (and maybe external in the future) npm packages

These folders are [registered as workspaces in package.json](package.json#L4-L7)

## Running the projects

### Setup projects

Install dependencies and build all projects.

```
npm install
npx turbo build
```

## Run an app

First run commands from Setup Projects, then run the following commands:

```
cd apps/<app-name> # cd apps/pano
docker-compose up --build
```
