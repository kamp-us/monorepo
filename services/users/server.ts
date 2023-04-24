import express from "express";
import { createUsersServer } from "@kampus-protos/users/service.twirp";
import { IncomingMessage, ServerResponse } from "http";
import { TwirpContext } from "twirp-ts";
import {
  GetBatchUsersRequest,
  GetBatchUsersResponse,
} from "@kampus-protos/users/service";
import { env } from "./env";

const server = createUsersServer({
  async GetUser(ctx, request) {
    return {};
  },
  GetBatchUsers: function (
    ctx: TwirpContext<IncomingMessage, ServerResponse<IncomingMessage>>,
    request: GetBatchUsersRequest
  ): Promise<GetBatchUsersResponse> {
    throw new Error("Function not implemented.");
  },
});

const app = express();

app.post(server.matchingPath(), server.httpHandler());

app.listen(env.PORT, () => {
  console.log(`server is running at ${env.PORT}`);
});
