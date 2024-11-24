"use client";

import { ImageKitProvider } from "imagekitio-next";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const imageKitUrl = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <ImageKitProvider urlEndpoint={imageKitUrl}>{children}</ImageKitProvider>
  );
}
