export default function CvSection({ section }: { section: string }) {
  const cvSections = {
    professionalExperience: {
      heading: "Professional Experience",
      entries:  [
        {
          date: "1984 | 1991",
          title: "First Macintosh computer",
          institution: "Apple Inc.",
          location: "Cupertino, California",
          entries: [
            'The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer.',
            'It played a pivotal role in establishing desktop publishing as a general office function.',
            'The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.',
          ],
        },
        {
          date: "1998",
          title: "iMac",
          institution: "Apple Inc.",
          location: "Cupertino, California",
          entries: [
            `iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms.`
          ],
        },
        {
          date: "2001",
          title: "iPod",
          institution: "Apple Inc.",
          location: "Cupertino, California",
          entries: [
            `The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple`
          ],
        },
        {
          date: "2007",
          title: "iPhone",
          institution: "Apple Inc.",
          location: "Cupertino, California",
          entries: [
            `iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share`
          ],
        },
        {
          date: "2015",
          title: "Apple Watch",
          institution: "Apple Inc.",
          location: "Cupertino, California",
          entries: [
            `The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services`,
          ],
        },
      ]
    },
    volunteerActivity: {
      heading: "Volunteer Activity",
      entries:  [
        {
          date: "2001",
          title: "iPod",
          institution: "Apple Inc.",
          location: "Cupertino, California",
          entries: [
            `The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple`
          ],
        },
        {
          date: "2015",
          title: "Apple Watch",
          institution: "Apple Inc.",
          location: "Cupertino, California",
          entries: [
            `The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services`,
          ],
        },
      ]
    },
    education: {
      heading: "Education",
      entries:  [
        {
          date: "1998",
          title: "iMac",
          institution: "Apple Inc.",
          location: "Cupertino, California",
          entries: [
            "GPA 3.45/4, Class Coordinator",
          ],
        },
        {
          date: "2007",
          title: "iPhone",
          institution: "Apple Inc.",
          location: "Cupertino, California",
        },
      ]
    },
  };

  const timeline = (cvSections as any)[section].entries;
  const heading = (cvSections as any)[section].heading;

  return (
    <div className="mb-5 block">
      <div className="text-sm font-medium uppercase mb-0 pb-0">{heading}</div>

      <hr className="rounded-sm mb-1 mt-0" />

      <div className={""}>
        {timeline.map((item: any, index: any) => (
          <div key={index} className="break-inside-avoid mb-2 text-justify text-xs">

            <div className="header flex flex-row justify-between text-sm font-semibold">
              <div className="text-left">{item.institution}</div>
              {item.location && (
                <div className="flex flex-row gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-3 mt-auto mb-auto"
                  >
                    <path
                      fillRule="evenodd"
                      d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-right">{item.location}</div>
                </div>
              )}
            </div>

            <div key={index} className="header flex flex-row justify-between text-xs font-semibold">
              <div className="text-left">{item.title}</div>
              <div className="text-right">{item.date}</div>
            </div>

            {item.entries?.length > 1 && (
              <ul className="list-disc list-outside my-0">
                {item.entries.map((entry: any, index: any) => (
                  <li key={index} className="my-0 ml-4">{entry}</li>
                ))}
              </ul>
            )}

            {item.entries?.length === 1 && (
              <div dangerouslySetInnerHTML={{ __html: item.entries[0] }}></div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
