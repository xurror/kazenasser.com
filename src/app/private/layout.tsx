"use client";

import { signIn } from "@/auth";
import { useSession } from "next-auth/react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { status } = useSession()

  if (status === "loading") return <div>Loading...</div>
  if (status === "unauthenticated") return signIn()
  return children;
}
