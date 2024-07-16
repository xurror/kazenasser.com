import MapPinIcon from '@heroicons/react/24/solid/esm/MapPinIcon';
import { CVPrinter } from './printing_functions';
import { Graduate } from 'next/font/google';

export async function ContactInfo() {
    const cvPrinter = await new CVPrinter().init("data.xlsx");
    const contactInfos = cvPrinter.printContactInfo();
    return <div className='level2'>
        {
            Array.isArray(contactInfos) ?
                <ul>
                    {contactInfos.map((info, j) => (
                        <li key={j}><i className={`fa fa-${info.icon}`}></i> ${info.contact}</li>
                    ))}
                </ul>
                : <></>
        }
    </div>
}
