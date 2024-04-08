import ArchiveTable from "@/components/ArchiveTable";
import { LinkButton } from "@/components/Button";
import BackIcon from "@/icons/BackIcon";

export default function ArchivePage() {
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
                        Archive
                    </h1>
                    <p className='text-center text-zinc-700 dark:text-zinc-400 text-pretty'>
                        Here are the documents that have been used to retrieve data about AlienAI
                    </p>
                </div>

                <div className="col-span-1"></div>
            </div>


            <ArchiveTable />
        </>
    )
}
