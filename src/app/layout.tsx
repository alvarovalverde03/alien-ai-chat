import type { Metadata } from 'next'
import './globals.css'
import BackgroundBlur from '@/components/BackgroundBlur'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'AlienAI Chat − alvarovalverde.dev',
  description: 'AlienAI Chat is a chatbot that generates responses about AlienAI (a ficticious company), based on user inputs. Developed with NextJS and LangChain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='relative flex min-h-dvh max-h-dvh max-w-[860px] w-full mx-auto overflow-hidden flex-col items-center justify-between px-4 pb-q lg:pb-4 pt-6 lg:pt-8'>
          <Toaster 
            theme='dark'
            position='top-center'
            offset={100}
            visibleToasts={1}
            richColors={true}
          />
          <BackgroundBlur />
          {children}
        </main>
      </body>
    </html>
  )
}
