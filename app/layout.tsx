import './globals.css'
import { Anton, Montserrat } from 'next/font/google'

const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
})

const montserrar = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '700']
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
      <body className={anton.className}>{children}</body>
    </html>
  )
}
