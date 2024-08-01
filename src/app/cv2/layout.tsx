import React from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div id="loader" className="min-h-screen flex flex-col">
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </div>
      </div>

      <div id="CV">
        {children}
      </div>
    </div>
  )
}