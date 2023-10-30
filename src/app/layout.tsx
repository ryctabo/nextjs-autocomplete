import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Link from 'next/link'
import MyCombobox from '@/components/MyCombobox'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autocomplete with Next.js',
  description: 'A simple example using autocomplete with HeadlessUI',
}

export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className} h-screen
          selection:bg-indigo-500 selection:text-indigo-100
        `}
      >
        <header
          className={`
          bg-gradient-to-tr from-teal-400 to-sky-500 text-center text-white 
          py-6 px-2 grid justify-center gap-4
        `}
        >
          <section>
            <h1 className="text-4xl font-bold">
              <Link href="/">My autocomplete</Link>
            </h1>
            <h2 className="text-xl font-medium">with Next.js + HeadlessUI</h2>
          </section>
          <MyCombobox />
        </header>
        {children}
      </body>
    </html>
  )
}
