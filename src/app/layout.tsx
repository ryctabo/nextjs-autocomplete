import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autocomplete with Next.js',
  description: 'A simple example using autocomplete with HeadlessUI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-tr from-teal-400 to-sky-500 h-screen`}>
        {children}
      </body>
    </html>
  )
}
