"use client";

import { useRouter } from "next/navigation";
import { Dialog, Theme } from "@radix-ui/themes";

import { CreatePanoPostForm } from "~/app/pano/CreatePanoPostForm";

export default function CreatePost({ searchParams }: { searchParams: { conn: string } }) {
  const router = useRouter();

  return (
    <Theme accentColor="amber">
      <Dialog.Root open onOpenChange={() => router.back()}>
        <Dialog.Content className="sm:max-w-[425px]">
          <Dialog.Title>Yeni Pano Girdisi</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            pano&apos;yu zenginleştir :)
          </Dialog.Description>
          <CreatePanoPostForm connectionID={searchParams.conn} onCompleted={() => router.back()} />
        </Dialog.Content>
      </Dialog.Root>
    </Theme>
  );
}
