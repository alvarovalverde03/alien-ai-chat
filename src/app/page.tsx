'use client'

import Input from '@/components/Input';
import MessageList from '@/components/MessageList';
import type { TMessage } from '@/types/Message';
import { useState } from 'react';
import { LinkButton } from '@/components/Button';
import ArchiveIcon from '@/icons/ArchiveIcon';

export default function Home() {
  const [messages, setMessages] = useState<TMessage[]>([])
  const [isSending, setIsSending] = useState(false)

  const updateMessages = (update: TMessage[] | ((prevMessages: TMessage[]) => TMessage[])) => {
    setMessages(update);
  }

  return (
    <>
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

      <MessageList messages={messages} updateMessages={updateMessages} isSending={isSending} setIsSending={setIsSending} />

      <Input updateMessages={updateMessages} isSending={isSending} setIsSending={setIsSending} />
    </>
  )
}
