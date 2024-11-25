"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ImageKitProvider } from "imagekitio-next";

const queryClient = new QueryClient();

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const imageKitUrl = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <QueryClientProvider client={queryClient}>
      <ImageKitProvider urlEndpoint={imageKitUrl}>{children}</ImageKitProvider>
    </QueryClientProvider>
  );
}
