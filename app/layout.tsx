import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono' })

export const metadata = {
  title: 'Anmol Tyagi | Full-Stack Developer',
  description: 'Portfolio of Anmol Tyagi. Architecting Seamless Web Experiences & Robust Systems using Next.js, React, and modern web technologies.',
  keywords: ['Anmol Tyagi', 'Full-Stack Developer', 'Portfolio', 'Next.js', 'React', 'Java'],
}

export const viewport = {
  themeColor: '#000000',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
