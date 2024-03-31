'use client'

import Chat from '@/components/Chat'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return <div>Not signed in</div>
  }
  
  return <Chat />
}
