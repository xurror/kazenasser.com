import type { Metadata } from "next";
import "#/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Nasser Kaze",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex h-full bg-zinc-50 dark:bg-black text-base">
        {children}
      </body>
    </html>
  );
}
