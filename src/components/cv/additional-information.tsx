export default function AdditionalInformation() {
    const cvAdditionalInformation = {
        skills: {
            heading: "Skills",
            entries: [
                "PHP", "Python", "Go", "Java", "TypeScript", "Kotlin", "Spring Boot",
                "Microservices", "gRPC", "MySQL", "PostgreSQL", "Kubernetes", "Docker", "CI/CD",
                "Jenkins", "AWS", "Azure", "Terraform",
            ],
        },
        languages: {
            heading: "Languages",
            entries: [
                "English & French (Native)", "German (Basic)",
            ],
        },
        interests: {
            heading: "Interests",
            entries: [
                "Reading", "Martial Arts", "Video Games", "Hiking", "Traveling", "Leadership",
            ],
        },
    };
    
  return (
    <div className="break-inside-avoid">
      <div className="header text-sm font-medium uppercase mb-0 pb-0">Additional Information</div>
      
      <hr className="rounded-sm mb-2 mt-0" />

      {Object.keys(cvAdditionalInformation).map((addInfo, index) => (
        <div key={index} className="flex flex-row text-justify text-xs">
          <span className="header font-semibold">{(cvAdditionalInformation as any)[addInfo].heading}:&nbsp;</span>
          <ul role="list" className="list-disc my-0 px-0">
            {(cvAdditionalInformation as any)[addInfo].entries.map((item: any, index: any) => (
              <li className="cv-add-info-list-2 my-0" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
