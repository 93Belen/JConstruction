import './globals.css'
import { Anton, Montserrat } from 'next/font/google'
import Header from './components/Header'

const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-anton'
})

const montserrar = Montserrat({
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
    <html lang="en" className={montserrar.className}>
      <Header />
      <body className={anton.className}>{children}</body>
    </html>
  )
}
