import { createHandler } from "@kampus/email/handlers/resend";

import { env } from "~/env";

// export const runtime = "edge";

const handler = createHandler(env.RESEND_API_KEY);

export { handler as POST };
