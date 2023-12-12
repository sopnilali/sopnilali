import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
     <head>
     </head>
      <body className={inter.className}>
        
        <Navbar />
        <main className="w-full overflow-y-hidden">{children}</main>
        <Footer/>
        </body>
    </html>
  )
}