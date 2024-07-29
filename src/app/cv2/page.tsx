'use client';

import Timeline from "@/components/timeline";
import { useCallback, useLayoutEffect, useEffect, useState } from "react";
import * as pagedjs from 'pagedjs';
import CvSection from "@/components/cv-section";
import CvAdditionalInformation from "@/components/cv-additional-information";

export default function CVPage() {
  const [isInitialized, setIsInitialized] = useState(false);

  const previewCV = useCallback((isInitialized: boolean) => {
    if (!isInitialized) {
      return;
    }

    const cv = document.querySelector("#CV");
    const previewer = new pagedjs.Previewer();
    previewer
      .preview(cv?.innerHTML, [], document.querySelector("#pagedjs-preview"))
      .then((flow: any) => {
        console.log("preview rendered, total pages", flow.total, { flow });
      });
  }, [])
  // useEffect(() => {
  useLayoutEffect(() => {
    // previewCV(isInitialized);
    setIsInitialized(true);
  }, [isInitialized, previewCV]);


  return (
    <div className="">

    {/* <div id="layout" className="layout">
      <aside id="aside"></aside> */}

      <div className="font-serif">
        <div className="">
          <div className="text-bold uppercase text-xl">
            Nasser Kaze
          </div>
          
          <div className="text-sm mb-2">
            <ul className="my-0 px-0">
              <li className="cv-contact-list-2">
                Location: Berlin, Germany
              </li>
              <li className="cv-contact-list-2">
                Email: <a className="cv-contact-list-link" href="mailto:kazenasser@gmail.com">kazenasser@gmail.com</a>
              </li>
              {/* <li className="cv-contact-list-2">
                GitHub: <a className="cv-contact-list-link" href="https://github.com/xurror">github.com/xurror</a>
              </li> */}
              <li className="cv-contact-list-2">
                LinkedIn: <a className="cv-contact-list-link" href="https://linkedin.com/in/xurror">linkedin.com/in/xurror</a>
              </li>
            </ul>
          </div>
        </div>
        
        <CvSection section="professionalExperience" />
        <CvSection section="volunteerActivity" />
        <CvSection section="education" />
        <CvAdditionalInformation />
      </div>

    {/* </div> */}
        
    </div>
  );
}
