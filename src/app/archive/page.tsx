import ArchiveTable from "@/components/ArchiveTable";
import { LinkButton } from "@/components/Button";
import BackIcon from "@/icons/BackIcon";

export default function ArchivePage() {
    return (
        <main className='flex min-h-dvh max-h-dvh max-w-[900px] w-full mx-auto overflow-hidden flex-col items-center justify-between px-4 pb-2 lg:pb-6 pt-8 lg:pt-12 relative'>
            <div className='absolute flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-0 before:rounded-full before:bg-gradient-radial before:from-green-500 before:to-orange-500 before:blur-2xl before:content-[""] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-0 after:bg-gradient-conic after:from-green-500 after:via-orange-500 after:blur-2xl after:content-[""] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-400 before:dark:opacity-10 after:dark:from-green-600 after:dark:via-[#ffa332] after:dark:opacity-40 before:lg:h-[360px] z-[-1]' />
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
                        Archive
                    </h1>
                    <p className='text-center text-zinc-400 text-pretty'>
                        Here are the documents that have been used to retrieve data about AlienAI
                    </p>
                </div>

                <div className="col-span-1"></div>
            </div>


            <ArchiveTable />
        </main>
    )
}
