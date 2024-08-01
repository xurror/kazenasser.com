import { CVPrinter } from "@/app/cv/printing_functions";

export default async function CvSection({ section }: { section: string }) {
  const cvPrinter = await new CVPrinter().init("data.xlsx");
  const timeline = cvPrinter.printSection(section);
  
  return (
    <div className="mb-5 block">
      <div className="text-sm font-medium uppercase mb-0 pb-0">{section.replace('_', ' ')}</div>

      <hr className="rounded-sm mb-1 mt-0" />

      <div className={""}>
        {timeline && timeline.map((item: any, index: any) => (
          <div key={index} className="break-inside-avoid mb-2 text-justify text-xs">

            <div className="header flex flex-row justify-between text-sm font-semibold">
              <div className="text-left">{item.loc}</div>
              {item.institution && (
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
                  <div className="text-right">{item.institution}</div>
                </div>
              )}
            </div>

            <div key={index} className="header flex flex-row justify-between text-xs font-semibold">
              <div className="text-left">{item.title}</div>
              <div className="text-right">{item.timeline}</div>
            </div>

            <div>
              {
                Array.isArray(item.description_bullets) ?
                <ul className="list-disc list-outside my-0">
                      {item.description_bullets.map((entry: any, i: any) => (
                          <li key={i} className="my-0 ml-4">{entry}</li>
                      ))}
                  </ul>
                  : <div dangerouslySetInnerHTML={{ __html: item.description_bullets }}></div>
              }
            </div>

            {/* {item.entries?.length > 1 && (
              <ul className="list-disc list-outside my-0">
                {item.entries.map((entry: any, index: any) => (
                  <li key={index} className="my-0 ml-4">{entry}</li>
                ))}
              </ul>
            )}

            {item.entries?.length === 1 && (
              <div dangerouslySetInnerHTML={{ __html: item.entries[0] }}></div>
            )} */}

          </div>
        ))}
      </div>
    </div>
  );
}
