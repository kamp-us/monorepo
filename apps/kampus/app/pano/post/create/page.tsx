"use client";

import { useRouter } from "next/navigation";

import { CreatePanoPostForm } from "../../CreatePanoPostForm";

export default function CreatePost() {
  const router = useRouter();
  return <CreatePanoPostForm onCompleted={() => router.push("/")} />;
}
