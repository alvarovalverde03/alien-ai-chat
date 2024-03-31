import { signIn } from 'next-auth/react'

export default function Auth() {
    return (
        <div className='h-dvh flex flex-col items-center justify-center gap-10'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <img src="/alien.webp" alt="AlienAI Logo" className="w-12 h-12 opacity-80 mb-4" />
                <h1 className='text-2xl font-semibold text-center'>
                    Welcome to AlienAI Chat
                </h1>
                <span className='text-zinc-400'>
                    Sign in to continue
                </span>
            </div>
            <button 
                className='flex items-center justify-center h-9 px-8 py-5 gap-1 text-xs font-medium border rounded-lg toggle-full-view focus:z-10 focus:ring-2 focus:ring-gray-500 bg-gray-950 focus:outline-none text-gray-300 border-gray-600 hover:text-white hover:bg-neutral-900'
                onClick={() => signIn()}
            >
                <span 
                    className='text-base block text-nowrap uppercase'>
                    Sign in
                </span>
            </button>
        </div>
    )
}