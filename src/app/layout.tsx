import type { Metadata } from 'next'
import './globals.css'
import BackgroundBlur from '@/components/BackgroundBlur'

export const metadata: Metadata = {
  title: 'NextJS + LangChain',
  description: 'IA Chat developed with NextJS and LangChain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <main className='flex min-h-dvh max-h-dvh max-w-[900px] w-full mx-auto overflow-hidden flex-col items-center justify-between px-4 pb-2 lg:pb-6 pt-8 lg:pt-12'>
          <BackgroundBlur />
          {children}
        </main>
      </body>
    </html>
  )
}
