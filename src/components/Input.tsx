'use client'

import SendArrowIcon from '@/icons/SendArrowIcon';
import { useState } from 'react';

export type FormData = {
  text: string;
}

export default function SendInput(props: any) {
  const [form, setForm] = useState<FormData>({
    text: ''
  })

  function handleInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value }  = event.target
    setForm({
      ...form,
      [name]: value 
    })
  }

  async function handleSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.text) return

    const data = {
      text: form.text
    }

    // TODO: Send message/prompt
    console.log('sending message', data)

    setForm({
      text: ''
    })

    props.onCreate()
  }

  return (
    <form className="relative w-full py-3" onSubmit={handleSend}>
      <input type="text" id="text" name='text'
        onChange={handleInputOnChange}
        value={form.text}
        className="pr-14 text-base placeholder-gray-800 dark:placeholder-gray-400 text-black dark:text-white flex h-10 w-full rounded-md border border-black dark:border-white border-input bg-gray-100 dark:bg-black px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed" 
        
        placeholder="Write a message..." autoComplete="off"
      />

      <button type='submit' className="absolute inset-y-0 right-0 top-0 flex items-top pt-[1.125rem] pr-3 z-40 disabled:opacity-40" 
              { ...(form.text ? {} : { disabled: true }) }
      >
        <SendArrowIcon />
      </button>
    </form>
  )
}