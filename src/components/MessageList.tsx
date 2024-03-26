'use client'

import Message from '@/components/Message';
import type { TMessage } from '@/types/Message';
import { useEffect, useRef } from 'react'
import Empty from './Empty';
import SpinnerIcon from '@/icons/SpinnerIcon';

interface Props {
    messages: TMessage[];
    updateMessages: (messages: TMessage[] | ((prevMessages: TMessage[]) => TMessage[])) => void;
    isSending: boolean;
    setIsSending: (isSending: boolean) => void;
}

export default function MessageList({ messages, updateMessages, isSending, setIsSending }: Props) {
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <div className="flex-1 flex flex-col gap-6 min-h-full min-w-full max-w-full mt-4 mb-1 pr-2 lg:px-2 overflow-y-auto overflow-x-hidden scroll-smooth">
            {messages && messages.map((m, index) => (
                <Message author={m.author} text={m.text} documents={m.documents} key={index} />                
            ))}

            {messages.length === 0 && (
                <Empty updateMessages={updateMessages} isSending={isSending} setIsSending={setIsSending} />
            )}

            {isSending && (
                <div className="flex items-center justify-center">
                    <SpinnerIcon />
                </div>
            )}

            <div ref={bottomRef}></div>
        </div>
    )
}