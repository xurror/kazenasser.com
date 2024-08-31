import type { Metadata } from "next";
import "#/styles/globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
