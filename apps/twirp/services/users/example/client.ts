import { UsersClientProtobuf } from "@kampus-protos/users/service.twirp";
import { NodeHttpRPC } from "twirp-ts";

const main = async () => {
  const client = new UsersClientProtobuf(
    NodeHttpRPC({
      baseUrl: "http://localhost:8200/twirp",
    })
  );

  const user = await client.CreateUser({
    email: "umut@usir.in",
    username: "usirin",
  });

  console.log("created user", user);

  console.log(
    await client.GetUser({
      identifier: {
        oneofKind: "username",
        username: "usirin",
      },
    })
  );

  console.log(
    await client.GetBatchUsers({
      ids: [],
      emails: [],
      usernames: ["admin", "testuser", "usirin"],
    })
  );
};

main().then(() => {
  console.log("sayanora");
});
