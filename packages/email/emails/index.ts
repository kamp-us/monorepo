import { type z } from "zod";

import { type kampusEmailSchema } from "../schemas";

export type KampusEmailProps = z.infer<typeof kampusEmailSchema>;

export type KampusEmailType = KampusEmailProps["type"];
