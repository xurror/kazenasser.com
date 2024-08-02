// 'use client'
import React from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <article className="prose prose-neutral mx-auto">
        {children}
      </article>
    </main>
  )
}