'use client'

import Input from '@/components/Input';
import MessageList from '@/components/MessageList';
import type { TMessage } from '@/types/Message';
import { useState } from 'react';
import { LinkButton } from '@/components/Button';
import ArchiveIcon from '@/icons/ArchiveIcon';
import GitHubIcon from '@/icons/GitHubIcon';

export default function Home() {
  const [messages, setMessages] = useState<TMessage[]>([])
  const [isSending, setIsSending] = useState(false)

  const updateMessages = (update: TMessage[] | ((prevMessages: TMessage[]) => TMessage[])) => {
    setMessages(update);
  }

  return (
    <>
     <div className='w-full grid grid-cols-8 items-center gap-4 text-sm mb-3'>
        <div className='col-span-0 lg:col-span-3 hidden lg:block'></div>

        
        <div className='col-span-3 lg:col-span-2 w-full flex flex-col lg:items-center pl-2 lg:pl-0 justify-center text-sm'>
          <h1 className='text-xl lg:text-2xl font-semibold text-start lg:text-center text-zinc-800 dark:text-zinc-200'>
            AlienAI Chat
          </h1>
        </div>

        <div className="col-span-5 lg:col-span-3 justify-self-end flex gap-2 flex-wrap">
            <LinkButton
                href="https://github.com/alvarovalverde03/alien-ai-chat"
                icon={<GitHubIcon />}
                text="View on GitHub"
                responsiveText
                target_blank
            />
            <LinkButton
                href="/archive"
                icon={<ArchiveIcon />}
                text="Go to archive"
            />
        </div>
      </div>

      <MessageList messages={messages} updateMessages={updateMessages} isSending={isSending} setIsSending={setIsSending} />

      <Input updateMessages={updateMessages} isSending={isSending} setIsSending={setIsSending} />
    </>
  )
}
