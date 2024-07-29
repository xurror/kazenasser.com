import { tinos } from "@/fonts";
import React from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={tinos.className}>
       <div id="CV" className="prose prose-neutral prose-lg dark:prose-invert prose-a:text-blue-600 mx-auto cv">
        {children}
      </div>
    </div>
  )
}