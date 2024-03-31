import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import BackgroundBlur from '@/components/BackgroundBlur'
import { Toaster } from 'sonner'
import { Providers } from './Providers'

export const metadata: Metadata = {
  title: 'AlienAI Chat − alvarovalverde.dev',
  description: 'AlienAI Chat is a chatbot that generates responses about AlienAI (a ficticious company), based on user inputs. Developed with NextJS and LangChain.',
  authors: [{ name: 'Álvaro', url: 'https://alvarovalverde.dev' }],
  metadataBase: new URL('https://ai.alvarovalverde.dev'),
  openGraph: {
    title: 'AlienAI Chat − alvarovalverde.dev',
    description: 'AlienAI Chat is a chatbot that generates responses about AlienAI (a ficticious company), based on user inputs. Developed with NextJS and LangChain.',
    images: ['/alien-ai-og.png'],
  },
  twitter: {
    title: 'AlienAI Chat − alvarovalverde.dev',
    description: 'AlienAI Chat is a chatbot that generates responses about AlienAI (a ficticious company), based on user inputs. Developed with NextJS and LangChain.',
    card: 'summary_large_image',
    images: ['/alien-ai-og.png'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className='relative flex min-h-dvh max-h-dvh max-w-[860px] w-full mx-auto overflow-hidden flex-col items-center justify-between px-4 pb-q pb-2 lg:pb-3 pt-6 lg:pt-8'>
            <Analytics />
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
        </Providers>
      </body>
    </html>
  )
}
