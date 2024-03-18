'use client'

import Input from '@/components/Input';
import ResponseList from '@/components/ResponseList';
import type { Message } from '@/components/Response';
import { useState } from 'react';
import { LinkButton } from '@/components/Button';
import ArchiveIcon from '@/icons/ArchiveIcon';

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])

  const updateMessages = (update: Message[] | ((prevMessages: Message[]) => Message[])) => {
    setMessages(update);
  };

  return (
    <main className='flex min-h-dvh max-h-dvh max-w-[900px] w-full mx-auto overflow-hidden flex-col items-center justify-between px-4 pb-2 lg:pb-6 pt-8 lg:pt-12 relative'>
      <div className='absolute flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-0 before:rounded-full before:bg-gradient-radial before:from-green-500 before:to-orange-500 before:blur-2xl before:content-[""] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-0 after:bg-gradient-conic after:from-green-500 after:via-orange-500 after:blur-2xl after:content-[""] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-400 before:dark:opacity-10 after:dark:from-green-600 after:dark:via-[#ffa332] after:dark:opacity-40 before:lg:h-[360px] z-[-1]' />
      <div className='w-full grid grid-cols-6 gap-4 text-sm mb-3'>
        <div className='col-span-0 lg:col-span-1 hidden lg:block'></div>

        
        <div className='col-span-5 lg:col-span-4 w-full flex flex-col items-center justify-center text-sm'>
          <h1 className='text-xl lg:text-2xl font-semibold text-center'>
            🦜🔗 NextJS + LangChain Chat
          </h1>
        </div>

        <div className="col-span-1 justify-self-end">
            <LinkButton
                href="/archive"
                icon={<ArchiveIcon />}
                text="Go to archive"
                responsiveText={true}
            />
        </div>
      </div>

      <ResponseList messages={messages} />

      <Input messages={messages} updateMessages={updateMessages} />
    </main>
  )
}
