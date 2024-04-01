'use client'

import { LinkButton } from "@/components/Button";
import BackIcon from "@/icons/BackIcon";
import { signOut, useSession } from "next-auth/react";

export default function ProfilePage() {
    const { data: session } = useSession()

    return (
        <>
            <div className="grid grid-cols-6 gap-4 w-full">
                <div className="col-span-1">
                    <LinkButton
                        href="/"
                        icon={<BackIcon />}
                        text="Go to chat"
                        responsiveText={true}
                    />
                </div>

                <div className='col-span-4 w-full flex flex-col items-center justify-center text-sm mb-8'>
                    <h1 className='mb-2 text-2xl font-semibold text-center'>
                        Profile
                    </h1>
                </div>

                <div className="col-span-1"></div>
            </div>


            {session?.user && (
                <div className="flex-1 flex flex-col items-center gap-6 min-h-full min-w-full my-2 pr-3 lg:px-4 overflow-y-auto">
                    <p className='text-center text-lg text-zinc-400 text-pretty'>
                        {`Welcome, ${session.user.name}!`}
                    </p>


                    <button
                        className='flex items-center justify-center h-9 px-8 py-5 gap-1 text-xs font-medium border rounded-lg toggle-full-view focus:z-10 focus:ring-2 focus:ring-gray-500 bg-gray-950 focus:outline-none text-gray-300 border-gray-600 hover:text-white hover:bg-neutral-900'
                        onClick={() => signOut()}
                    >
                        <span
                            className='text-base block text-nowrap uppercase'>
                            Sign out
                        </span>
                    </button>
                </div>
            )}

        </>
    )
}
