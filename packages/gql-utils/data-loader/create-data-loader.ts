import DataLoader, { type BatchLoadFn } from "dataloader";

export function createDataLoader<TKey, TValue>(
  batchFn: BatchLoadFn<TKey, TValue>,
  onComplete?: (values: TValue[]) => void
) {
  return new DataLoader(async (keys: readonly TKey[]) => {
    const result = (await batchFn(keys)) ?? [];

    onComplete?.(result as unknown as TValue[]);

    return result;
  });
}
