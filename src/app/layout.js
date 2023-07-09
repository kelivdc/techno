import './globals.css'
import { Mulish } from 'next/font/google'
import Tampilan from '../../components/Tampilan'

const inter = Mulish({ 
  weight: ['300','400','500','600','700','800'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Terminal Techno',
  description: 'Tempat berbagi informasi tentang teknologi terkini',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Tampilan>
        {children}
        </Tampilan>
      </body>
    </html>
  )
}
