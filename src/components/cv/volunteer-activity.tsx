import { loadCVData } from '@/libs/cv/utils';

export default async function VolunteerActivity() {
  const section = 'Volunteer Activity';
  const data = await loadCVData();
  const timeline = data[section];
  
  return (
    <div className="mb-5 block">
      <div className="text-sm font-medium uppercase mb-0 pb-0">{section}</div>

      <hr className="rounded-sm mb-1 mt-0" />

      {timeline && timeline.map((item, index) => (
        <div key={index} className="break-inside-avoid mb-2 text-justify text-xs">

          <div className="header text-sm font-semibold">{item['Role']}</div>

          <div key={index} className="header flex flex-row justify-between text-xs font-semibold">
            <div className="text-left">
              {item['Organization']}
              {item['Where'] && (
                <span className="italic font-normal">,&nbsp;{item['Where']}</span>
              )}
            </div>
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
