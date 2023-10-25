import {DM_Sans} from 'next/font/google'
import '@/styles/globals.css'

const DMSans = DM_Sans({
        subsets: ['latin'],
        weight: ['200'],
        display: 'swap',
    },
)
export const metadata = {
    title: 'Stephan Flores - Front-End Developer',
    description: 'Stephan Flores, développeur front-end spécialisé en HTML, CSS, JavaScript, React/NextJS et Three.js. Passionné par la création de sites web interactifs.'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={DMSans.className}>
            {children}
        </body>
        </html>
    )
}
