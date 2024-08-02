import { loadCVData } from "@/libs/cv/utils";

export default async function ProfessionalExperience() {
  const section = 'Professional Experience';
  const data = await loadCVData();
  const timeline = data[section]

  return (
    <div className="mb-5 block">
      <div className="text-sm font-medium uppercase mb-0 pb-0">{section.replace('_', ' ')}</div>

      <hr className="rounded-sm mb-1 mt-0" />

      {timeline && timeline.map((item, index) => (
        <div key={index} className="break-inside-avoid mb-2 text-justify text-xs">

          <div className="header flex flex-row justify-between text-sm font-semibold">
            <div className="text-left">{item['Organization']}</div>
            {item['Where'] && (
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
                <div className="text-right">{item['Where']}</div>
              </div>
            )}
          </div>

          <div key={index} className="header flex flex-row justify-between text-xs font-semibold">
            <div className="text-left">{item['Role']}</div>
            <div className="text-right">{item['When']}</div>
          </div>

          {item['Achievements']?.length > 0 && (
            <ul className="list-disc list-outside my-0">
              {item['Achievements'].map((entry, index) => (
                <li key={index} className="my-0 ml-4">{entry}</li>
              ))}
            </ul>
          )}

        </div>
      ))}
    </div>
  );
}
