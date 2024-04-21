import TheFooter from '@/components/theFooter'
import TheHeader from '@/components/theHeader'
import { ceraFont } from '@/config/ceraFont'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flowers Store',
  description: 'Sayidrahmatulloh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={'scroll-smooth'}>
      <body className={ceraFont.className}>
        <main className='mx-auto max-w-[1200px] p-2'>
          <div className='fixed left-0 top-0 w-full bg-white px-4'>
            <TheHeader />
          </div>
          <div className='pt-24'>{children}</div>
          <TheFooter />
        </main>
      </body>
    </html>
  )
}
