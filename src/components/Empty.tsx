'use client'

import SendArrowIcon from '@/icons/SendArrowIcon'
import type { TMessage } from '@/types/Message'
import { Authors } from '@/types/constants';
import { toast } from 'sonner';

interface Props {
    updateMessages: (messages: TMessage[] | ((prevMessages: TMessage[]) => TMessage[])) => void;
    isSending: boolean;
    setIsSending: (isSending: boolean) => void;
}

const messages = [
    {
        text: 'Talk me about AlienAI. What is it?',
        prompt: 'Explain me what is AlienAI',
    },
    {
        text: 'How were the economic results at the end of 2023?',
        prompt: 'Give me the economic information about AlienAi for last quarter of 2023',


    },
]

export default function Empty({ updateMessages, isSending, setIsSending }: Props) {
    async function handleOnClick(prompt: string) {
        if (isSending) return

        updateMessages(prevMessages => ([
            ...prevMessages,
            {
                text: prompt,
                author: Authors.USER
            }
        ]))

        setIsSending(true)

        const res = await fetch('/api/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: prompt
            })
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
        <div className='text-center flex-auto flex flex-col justify-between items-center pl-2 lg:pl-0'>
            <div />

            <div className='flex flex-col items-center justify-center gap-4'>
                <img src="/alien.webp" alt="AlienAI Logo" className="w-12 h-12 opacity-70" />
                <p className="text-xl font-medium text-zinc-300">Ask me something abou AlienAI</p>
            </div>

            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2'>
                {messages.map((m, index) => (
                    <button
                        onClick={() => handleOnClick(m.prompt)}
                        key={index}
                        className="group transition inline-flex items-center justify-between gap-3 py-3 px-4 text-sm rounded-lg w-full max-h-16 h-16 overflow-hidden toggle-full-view focus:z-10 focus:ring-2 focus:ring-gray-500 bg-none focus:outline-none text-gray-400 border border-gray-600 hover:border-gray-400 hover:text-gray-300 hover:bg-black"
                    >
                        <div className="line-clamp-2 text-pretty text-start">
                            {m.text}
                        </div>
                        <div className="hidden group-hover:flex opacity-65 items-center justify-center">
                            <SendArrowIcon />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}