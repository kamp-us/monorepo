interface OrderByArgs {
  [key: string]: "asc" | "desc" | OrderByArgs;
}

export interface FindManyArgs {
  where?: { [key: string]: string | { in: string[] } | null };
  orderBy?: OrderByArgs;
  cursor?: { id: string };
  take?: number;

  include?: { [key: string]: FindManyArgs };
}

export interface CountArgs {
  where: FindManyArgs["where"];
}

export type PrismaModel<TModel> = {
  findMany(args: FindManyArgs): Promise<TModel[]>;
  count(args: CountArgs): Promise<number>;
};
