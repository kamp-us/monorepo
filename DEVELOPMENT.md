# Development
This document describes the process for running this application on your local computer.

## Getting started
You'll need [Volta](https://volta.sh/) to run the site.

Once you've installed [Volta](https://volta.sh/), open Terminal and run the following:
```console
git clone https://github.com/kamp-us/monorepo.git
cd monorepo
npm install
npm run build

cd apps/pano
cp .env.example .env
docker-compose up -d
npm run dev
```

You should now have a running server! Visit [localhost:3000](http://localhost:3000) in your browser.

You can find user credentials in seed.ts

When you're ready to stop your local server, type Ctrl+C in your terminal window.

### Note that
npm ci and npm run build are steps that should typically only need to be run once each time you pull the latest for a branch.
