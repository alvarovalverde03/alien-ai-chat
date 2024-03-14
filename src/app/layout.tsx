import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
