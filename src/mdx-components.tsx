import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{
    //   fontWeight: 300,
    //   fontSize: '1.8rem',
    //   lineHeight: 1.5
    // }}>{children}</h1>,
    
    strong: ({ children }) => <b style={{ fontWeight: 600 }}>{children}</b>,

    // // ul: ({ children }) => <ul className='cv aside'>{children}</ul>,
    // // li: ({ children }) => <li className='cv aside'>{children}</li>,
    // img: (props) => (
    //   // eslint-disable-next-line jsx-a11y/alt-text
    //   <Image
    //     sizes="100vw"
    //     style={{ width: '100%', height: 'auto' }}
    //     {...(props as ImageProps)}
    //   />
    // ),
    // Research: ({ researches }: { researches: string[] }) => (
    //   <section className="research">
    //     <h2>Research</h2>
    //     <ul>
    //       {researches.map((research) => (
    //         <li key={research}>{research}</li>
    //       ))}
    //     </ul>
    //   </section>
    // ),
    ...components,
  }
}
