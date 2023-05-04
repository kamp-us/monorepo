import express from "express";
import { env } from "./env";
import { server } from "./server";

const app = express();

console.log("twirp server is gonna be routed to: ", server.matchingPath());

app.post(server.matchingPath(), server.httpHandler());

app.listen(env.PORT, () => {
  console.log(`server is running at ${env.PORT}`);
});
