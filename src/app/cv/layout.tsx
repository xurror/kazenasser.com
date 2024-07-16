import { Lora, Raleway } from 'next/font/google'
import styles from './styles.module.css'

const lora = Lora({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ["latin"],
    display: 'swap',
});

const raleway = Raleway({
    weight: ['100', '900'],
    style: ['normal', 'italic'],
    subsets: ["latin"],
    display: 'swap',
});
 
export default async function MdxLayout({ children }: { children: React.ReactNode }) {
    
    return <main
            className={[
                styles.cv,
                styles.main,
                lora.className,
                raleway.className,
                // "flex min-h-screen",
                // "flex-col",
                // "items-center",
                // "justify-between",
                "p-24"
        ].join(' ')}>
            {children}
        </main>
}
