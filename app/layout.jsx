import {DM_Sans, GFS_Didot} from 'next/font/google'
import '@/styles/globals.css'

const DMSans = DM_Sans({
        subsets: ['latin'],
        weight: ['200'],
        display: 'swap',
        variable: "--font-sanserif",
    },
)

const GFSDidot = GFS_Didot({
        subsets: ['greek'],
        weight: ['400'],
        display: 'swap',
        variable: "--font-serif",
    },
)
export const metadata = {
    title: 'Stephan Flores - Front-End Developer',
    description: 'Stephan Flores, développeur front-end spécialisé en HTML, CSS, JavaScript, React/NextJS et Three.js. Passionné par la création de sites web interactifs.'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${DMSans.variable} ${GFSDidot.variable}`}>
        {children}
        </body>
        </html>
    )
}
