import ArchiveTableItem from "./ArchiveTableItem";

export interface Document {
    id: number;
    title: string;
    url: string;
    date: string;
    status: string;
}

const documents: Document[] = [
    {
        id: 1,
        title: "Description of AlienAI S.L.",
        url: "/archive/AlienAI-SL-Description.pdf",
        date: "2023-04-01",
        status: "Approved"
    },
    {
        id: 2,
        title: "Economic Results for Q4 of the 2023 for AlienAI S.L.",
        url: "/archive/AlienAI-SL-Economics-results-2023-q4.pdf",
        date: "2024-01-01",
        status: "Approved"
    },
]

export default function ArchiveTable() {
    return (
        <div className="flex-1 flex flex-col items-center gap-6 min-h-full min-w-full my-2 pr-3 lg:px-4 overflow-y-auto">
            {!!documents && documents.length > 0 &&
                <div className="flex-col flex justify-center gap-2 items-center w-full text-sm text-zinc-100">
                    {documents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((item) => (
                        <ArchiveTableItem item={item} />
                    ))}
                </div>
            }

            {!!documents && documents.length === 0 && (
                <div className="flex-auto flex justify-center items-center text-sm text-zinc-300">
                    <p>No messages yet</p>
                </div>
            )}
        </div>
    )
}