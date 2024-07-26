export default function Timeline() {
  const timeline = [
    {
      date: "1984 | 1991",
      title: "First Macintosh computer",
      institution: "Apple Inc.",
      location: "Cupertino, California",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer.
			<ul className="list-disc">
      	<li>It played a pivotal role in establishing desktop publishing as a general office function.</li>
       	<li>The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.</li>
			</ul>`,
    },
    {
      date: "1998",
      title: "iMac",
      institution: "Apple Inc.",
      location: "Cupertino, California",
      description: `iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms.`,
    },
    {
      date: "2001",
      title: "iPod",
      institution: "Apple Inc.",
      location: "Cupertino, California",
      description: `The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple`,
    },
    {
      date: "2007",
      title: "iPhone",
      institution: "Apple Inc.",
      location: "Cupertino, California",
      description: `iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share`,
    },
    {
      date: "2015",
      title: "Apple Watch",
      institution: "Apple Inc.",
      location: "Cupertino, California",
      description: `The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services`,
    },
  ];

  return (
    <div>
      <div className="flex flex-row gap-4 ml-4 pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
            clip-rule="evenodd"
          />
        </svg>
        <div className="text-xl font-bold uppercase">Education</div>
      </div>

      {timeline.map((item, index) => (
        <div className="flex gap-x-3" key={index}>
          <div className="min-w-4 max-w-4 text-end mt-1 text-sm">
            <time className="font-mono italic text-xs">{item.date}</time>
          </div>

          <div className="cv-timeline-line">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8 cv-text-block">
            <div className="text-lg font-semibold">{item.title}</div>

            <div className="flex flex-row justify-between my-2">
              <div className="text-left text-xs">{item.institution}</div>

              <div className="flex flex-row gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="text-right text-xs">{item.location}</div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
