# pano

knowledge sharing platform for kamp.us people.

created with remix.run

# Development

- Make sure you have copied most up-to-date version of `.env.example` to `.env` on your local:

```sh
cp .env.example .env
```

- Then, make sure you have set `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET` variables inside `.env` on your local. (refer to [discord oauth docs](https://discord.com/developers/docs/getting-started))

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
