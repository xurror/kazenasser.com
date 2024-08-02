import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "#/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nasser Kaze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script src="js/paged.polyfill.js" async></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
