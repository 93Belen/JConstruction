import './globals.css'
import { Anton, Montserrat } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-anton'
})

export const montserrar = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '700'],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Jays Construction',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={` in-h-screen`}>
      <body className={`${montserrar.className} min-h-screen bg-blue`}>
      <Header />
      <div className={`h-[70%]`}>
        {children}
        </div>
      <Footer />
      </body>
    </html>
  )
}
