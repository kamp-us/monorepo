"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent } from "@kampus/ui";

import { CreatePanoPostForm } from "~/app/pano/CreatePanoPostForm";

export default function CreatePost({ searchParams }: { searchParams: { conn: string } }) {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
        <CreatePanoPostForm connectionID={searchParams.conn} onCompleted={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
}
