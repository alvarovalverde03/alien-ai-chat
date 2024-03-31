'use client'

import Chat from '@/components/Chat'
import Auth from '@/components/Auth'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return session ? <Chat /> : <Auth />
}
