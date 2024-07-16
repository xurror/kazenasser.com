import MapPinIcon from '@heroicons/react/24/solid/esm/MapPinIcon';
import { CVPrinter } from './printing_functions';
import { Graduate } from 'next/font/google';

export async function Section({ section }: { section: string }) {
    const cvPrinter = await new CVPrinter().init("data.xlsx");
    const researches = cvPrinter.printSection(section);
    return <div className='main-block concise'>
        
        <h2><i><MapPinIcon className="size-6" /></i> {section.replace('_', ' ')}</h2>

        {researches.map((research, i) => (
            <section className='blocks' key={i}>
                <div className='date'>{research.timeline}</div>
                <div className="decorator"></div>
                <div className="details">
                    <header>
                        <h3>{research.title}</h3>
                        <span className='place'>{research.loc}</span>
                        <span className='location'>
                            <i className='fa'><MapPinIcon className="size-3" /></i> 
                            {research.institution}</span>
                    </header>
                    {/* <br/> */}
                    <div>
                        {
                            Array.isArray(research.description_bullets) ?
                                <ul>
                                    {research.description_bullets.map((bullet, j) => (
                                        <li key={j}>{bullet}</li>
                                    ))}
                                </ul>
                                : <p>{research.description_bullets}</p>
                        }
                    </div>
                </div>
            </section>
        ))}
        
    </div>
}
