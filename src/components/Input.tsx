'use client'

import SendArrowIcon from '@/icons/SendArrowIcon';
import type { TMessage } from '@/types/Message';
import { Authors } from '@/types/constants';
import { useState } from 'react';
import SpinnerIcon from '@/icons/SpinnerIcon';
import { toast } from 'sonner';
import Link from 'next/link';

export type FormData = {
  text: string;
}

interface Props {
  updateMessages: (messages: TMessage[] | ((prevMessages: TMessage[]) => TMessage[])) => void;
  isSending: boolean;
  setIsSending: (isSending: boolean) => void;
}

export default function SendInput({ updateMessages, isSending, setIsSending }: Props) {
  const [form, setForm] = useState<FormData>({
    text: ''
  })

  function handleInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.text || isSending) return

    const formCopy = { ...form }

    updateMessages(prevMessages => ([
      ...prevMessages,
      {
        text: formCopy.text,
        author: Authors.USER
      }
    ]))

    setForm({
      text: ''
    })

    setIsSending(true)

    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formCopy)
    })

    const data = await res.json();

    if (data.error) {
      toast.error(data.text)
      setIsSending(false)
      return
    }

    setIsSending(false)

    updateMessages(prevMessages => [
      ...prevMessages,
      {
        text: data.text,
        author: Authors.ALIEN_AI,
        documents: data.documents
      }
    ])
  }

  return (
    <div className='w-full'>
      <form className="relative w-full pt-3 pb-2" onSubmit={handleSend}>
        <input type="text" id="text" name='text'
          onChange={handleInputOnChange}
          value={form.text}
          className="pr-14 text-base placeholder-gray-800 dark:placeholder-gray-400 text-black dark:text-white flex h-10 w-full rounded-md border border-black dark:border-white border-input bg-gray-100 dark:bg-black px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed"

          placeholder="Write a message..." autoComplete="off"
        />

        <button type='submit' className="absolute inset-y-0 right-0 top-0 flex items-top pt-[1.125rem] pr-3 z-40 disabled:opacity-40"
          {...(form.text || isSending ? {} : { disabled: true })}
        >
          {isSending
            ? <SpinnerIcon />
            : <SendArrowIcon />
          }
        </button>
      </form>
      <div className="w-full pt-[0.1rem] flex items-center justify-center text-xs text-zinc-500 text-center">
        Developed by
        <Link
          href="https://alvarovalverde.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 underline underline-offset-2 text-zinc-500 hover:text-zinc-400"
        >
          Álvaro Valverde
        </Link>
        . View source code on
        <Link
          href="https://github.com/alvarovalverde03/alien-ai-chat"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 underline underline-offset-2 text-zinc-500 hover:text-zinc-400"
        >
          GitHub
        </Link>.
      </div>
    </div>
  )
}

/*
<LinkButton
                    href="https://github.com/alvarovalverde03/alien-ai-chat"
                    icon={<GitHubIcon />}
                    text="View on GitHub"
                    responsiveText
                    target_blank
                />
*/