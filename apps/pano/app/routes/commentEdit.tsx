import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { z } from "zod";
import { editComment } from "~/models/comment.server";

const CommentSchema = z.object({
  commentID: z.string(),
  commentContent: z.string().min(1),
});

type ActionData = {
  error: {
    message: string;
    id: string | null;
  };
};

const errorMessage = (message: string, id: string) => {
  return json<ActionData>(
    {
      error: {
        message,
        id,
      },
    },
    {
      status: 400,
    }
  );
};
type CommentFields = z.infer<typeof CommentSchema>;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const jsonData = formData.get("json") as string;

  const parsedFields = JSON.parse(jsonData) as CommentFields;
  const result = CommentSchema.safeParse(parsedFields);

  if (!result.success) {
    return errorMessage("Yorum boş gönderilemez.", parsedFields.commentID);
  }

  try {
    await editComment(parsedFields.commentID, parsedFields.commentContent);
  } catch (e) {
    return {
      status: 500,
      body: e,
    };
  }

  return {
    status: 200,
    body: JSON.stringify({
      success: true,
    }),
  };
};
