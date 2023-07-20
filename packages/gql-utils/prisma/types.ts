export interface FindManyArgs {
  where?: { [key: string]: string | { in: string[] } | null };
  orderBy?: { createdAt: "asc" | "desc" };
  cursor?: { id: string };
  take?: number;
}

export interface CountArgs {
  where: FindManyArgs["where"];
}

export type PrismaModel<TModel> = {
  findMany(args: FindManyArgs): Promise<TModel[]>;
  count(args: CountArgs): Promise<number>;
};
