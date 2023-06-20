# pano

knowledge sharing platform for kamp.us people.

created with remix.run

# Development

- Make sure you have copied most up-to-date version of `.env.example` to `.env` on your local:

```sh
cp .env.example .env
```

- _`(Optional for discord authentication)`_ Make sure you have set `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET` variables inside `.env` on your local. (refer to [discord oauth docs](https://discord.com/developers/docs/getting-started))

- _`(Optional for github authentication)`_ Make sure you have set `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` variables inside `.env` on your local. (refer to [github oauth docs](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app))

- Start the Application and Postgres Database in [Docker](https://www.docker.com/get-started) and keep it running:

```sh
docker-compose up --build
```

- Open another terminal window and run:

```sh
npm run dev
```

The database seed script creates a new user with some data you can use to get started:

- Username: `admin`
- Password: `123123`

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save.
