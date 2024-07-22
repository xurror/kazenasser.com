// 'use client'
import React from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  
  return (
    <main className="@container" data-theme="dark">
      <article className="prose prose-slate mx-auto mt-8 lg:prose-2xl">
        {children}
      </article>
    </main>
  )
}