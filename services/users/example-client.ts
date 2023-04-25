import { UsersClientProtobuf } from "@kampus-protos/users/service.twirp";
import { NodeHttpRPC } from "twirp-ts";

const main = async () => {
  const client = new UsersClientProtobuf(
    NodeHttpRPC({
      baseUrl: "http://localhost:8200/twirp",
    })
  );

  console.log(await client.GetUser({ id: "clgvgsetc00001k5fwnudyakr" }));

  console.log(
    await client.GetBatchUsers({
      ids: ["clgvgsetc00001k5fwnudyakr", "clgvgsetn00021k5ffw3s1h4d"],
    })
  );
};

main().then(() => {
  console.log("sayanora");
});
