import DataLoader, { type BatchLoadFn } from "dataloader";

export function createDataLoader<T, U>(batchFn: BatchLoadFn<T, U>) {
  return new DataLoader(batchFn);
}
