"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ImageKitProvider } from "imagekitio-next";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="data-mode" disableTransitionOnChange>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}>
            {children}
          </ImageKitProvider>
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
