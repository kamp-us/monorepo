import { UsersClient, UsersClientProtobuf } from "@kampus-protos/users";
import { NodeHttpRPC } from "twirp-ts";
import { env } from "../../env";

export type TwirpClients = {
  users: UsersClient;
};

export const createTwirpClients = (): TwirpClients => {
  return {
    users: new UsersClientProtobuf(NodeHttpRPC({ baseUrl: env.USERS_TWIRP_HOST })),
  };
};
