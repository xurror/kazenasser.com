import { tinos } from "@/fonts";
import React from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  const layoutClassNames = [
    "font-serif",
    "prose",
    "prose-neutral",
    "prose-xl",
    // "md:prose-2xl",
    "dark:prose-invert",
    "prose-a:text-blue-600",
    "mx-auto",
    "my-10",
    "py-10",
    // tinos.className
  ].join(" ");
  return (
    <div>
      <div
        id="CV"
        className={layoutClassNames}
      >
        {children}
      </div>
    </div>
  )
}