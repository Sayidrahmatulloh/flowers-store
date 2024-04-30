import TheFooter from '@/components/theFooter'
import TheHeader from '@/components/theHeader'
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
    <html lang='en' className={'select-none scroll-smooth'}>
      <body className={'font-monolisa italic'}>
        <main className='mx-auto max-w-7xl p-2'>
          <div className='fixed left-0 top-0 z-50 w-full bg-white px-4'>
            <TheHeader />
          </div>
          <div className='mt-24 min-h-screen'>{children}</div>
          <TheFooter />
        </main>
      </body>
    </html>
  )
}
