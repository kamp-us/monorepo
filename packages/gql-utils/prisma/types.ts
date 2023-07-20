
export type PrismaModel<TModel> = {
  findMany(args: FindManyArgs): Promise<TModel[]>;
  count(args: CountArgs): Promise<number>;
};
