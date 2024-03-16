'use client'

import Response, { Message } from '@/components/Response';
import { useEffect, useRef } from 'react'

interface Props {
    messages: Message[];
}

export default function ResponseList({ messages }: Props) {
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <div className="flex-1 flex flex-col gap-6 min-h-full min-w-full mt-4 mb-1 pr-2 lg:px-2 overflow-y-auto scroll-smooth">
            {messages && messages.map((m, index) => (
                <Response author={m.author} text={m.text} key={index} />                
            ))}

            {messages.length === 0 && (
                <div className="text-center flex-auto flex justify-center items-center text-sm text-zinc-300">
                    <p>No messages yet</p>
                </div>
            )}

            <div ref={bottomRef}></div>
        </div>
    )
}