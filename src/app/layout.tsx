import TheFooter from '@/components/theFooter'
import TheHeader from '@/components/theHeader'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto max-w-[1200px] p-4">
          <TheHeader />
          {children}
          <TheFooter />
        </main>
      </body>
    </html>
  )
}
