import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { parser } from "html-metadata-parser";
import invariant from "tiny-invariant";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const url = formData.get("url");

  invariant(typeof url === "string", "URL is required");

  try {
    const metaTags = await parser(url);
    return json(metaTags, {
      status: 200,
    });
  } catch (error) {
    return json(
      { error: "Linkten meta bilgileri alınamadı." },
      { status: 500 }
    );
  }
};
