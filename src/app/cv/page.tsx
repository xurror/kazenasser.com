import CvSection from "@/components/cv-section";
import CvAdditionalInformation from "@/components/cv-additional-information";


export default async function CVPage() {
  return (
    <div className="">
      <div id="layout" className="layout">
        {/* <aside id="aside"></aside> */}

        <div className="font-serif">
          <div
            id="main-title"
            className="header text-bold uppercase text-xl flex flex-row gap-3"
          >
            Nasser Kaze
            <button id="cv-download-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
            </button>
          </div>

          <div className="text-sm mb-2">
            <ul className="my-0 px-0">
              <li className="cv-contact-list-2">
                <span className="header font-semibold">Location:&nbsp;</span>
                Berlin, Germany
              </li>
              <li className="cv-contact-list-2">
                <span className="header font-semibold">Email:&nbsp;</span>
                <a
                  className="cv-contact-list-link"
                  href="mailto:kazenasser@gmail.com"
                >
                  kazenasser@gmail.com
                </a>
              </li>
              {/* <li className="cv-contact-list-2">
              <span className='header font-semibold'>GitHub:&nbsp;</span>
              <a className="cv-contact-list-link" href="https://github.com/xurror">github.com/xurror</a>
            </li> */}
              <li className="cv-contact-list-2">
                <span className="header font-semibold">LinkedIn:&nbsp;</span>
                <a
                  className="cv-contact-list-link"
                  href="https://linkedin.com/in/xurror"
                >
                  linkedin.com/in/xurror
                </a>
              </li>
            </ul>
          </div>

          <CvSection section="research_positions" />
          <CvSection section="teaching_positions" />
          <CvSection section="education" />
          <CvAdditionalInformation />
        </div>
      </div>
    </div>
  );
}
