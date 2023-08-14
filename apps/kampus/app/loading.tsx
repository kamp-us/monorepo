import { Loading as LoadingSkeleton } from "@kampus/ui";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <LoadingSkeleton size={32} />
    </div>
  );
}
