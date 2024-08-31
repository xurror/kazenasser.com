"use client";

import Script from "next/script";
import * as pagedjs from "pagedjs";
import { useCallback, useLayoutEffect, useState } from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  const renderCV = useCallback(async (isInitialized: boolean) => {
    if (!isInitialized) return;

    const cv = document.querySelector("#CV");
    const loader = document.querySelector("#loader");
    if (!cv) return;

    new pagedjs.Previewer()
      .preview(cv?.innerHTML, [], null)
      .then((flow: any) => {
        cv.remove();
        loader?.remove();
        document
          .querySelector("#cv-download-button")
          ?.addEventListener("click", () => window.print());
      });
  }, []);

  useLayoutEffect(() => {
    renderCV(isInitialized);
    setIsInitialized(true);
  }, [isInitialized, renderCV]);

  return (
    <>
      {/* <Script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js" /> */}
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
    </>
  )
}
