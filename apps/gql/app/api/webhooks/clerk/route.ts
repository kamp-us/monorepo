import { headers } from "next/headers";
import { type WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";

import { createClients } from "~/clients";
import { env } from "~/env";

export const dynamic = "force-dynamic";

const { prisma: db } = createClients();

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new SVIX instance with your secret.
  const wh = new Webhook(env.CLERK_WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  if (evt) {
    // 👉 Parse the incoming event body into a ClerkWebhook object
    try {
      // 👉 `webhook.type` is a string value that describes what kind of event we need to handle

      // 👉 If the type is "user.updated" the important values in the database will be updated in the users table
      if (evt.type === "user.updated") {
        const email = evt.data.email_addresses[0]?.email_address;
        if (email) {
          await db.user.update({
            where: { id: evt.data.id },
            data: {
              username: evt.data.username || "",
              name: `${evt.data.first_name ?? ""} ${evt.data.last_name ?? ""}`.trim() || null,
              image: evt.data.image_url,
              email,
            },
          });
        }
      }

      // 👉 If the type is "user.created" create a record in the users table
      if (evt.type === "user.created") {
        const email = evt.data.email_addresses[0]?.email_address;
        if (email) {
          await db.user.create({
            data: {
              id: evt.data.id,
              username: evt.data.username || "",
              name: `${evt.data.first_name ?? ""} ${evt.data.last_name ?? ""}`.trim() || null,
              image: evt.data.image_url,
              email,
            },
          });
        }
      }

      // 👉 If the type is "user.deleted", delete the user record and associated blocks
      if (evt.type === "user.deleted") {
        await db.user.delete({
          where: { id: evt.data.id },
        });
      }

      return new Response("", { status: 201 });
    } catch (err) {
      console.error(err);
      return new Response("Error occured -- processing webhook data", {
        status: 500,
      });
    }
  }
}
