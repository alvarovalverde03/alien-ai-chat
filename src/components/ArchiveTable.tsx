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
        date: "2023-09-01",
        status: "Approved"
    },
    {
        id: 2,
        title: "Economic Results for Q4 of the 2023 for AlienAI S.L.",
        url: "/archive/AlienAI-SL-Economics-results-2023-q4.pdf",
        date: "2024-01-01",
        status: "Approved"
    },
    {
        id: 3,
        title: "Interior Design Process of AlienAI S.L.",
        url: "/archive/AlienAI-SL-Interior Design Process.pdf",
        date: "2023-09-10",
        status: "Approved"
    },
    {
        id: 4,
        title: "Quality Process of AlienAI S.L.",
        url: "/archive/AlienAI-SL-Quality Process.pdf",
        date: "2023-11-29",
        status: "Approved"
    },
    {
        id: 5,
        title: "Values and Vision of AlienAI S.L.",
        url: "/archive/AlienAI-SL-Values and Vision.pdf",
        date: "2023-10-21",
        status: "Approved"
    },
    {
        id: 6,
        title: "Company Profile of AlienAI S.L.",
        url: "/archive/AlienAI-SL-Company Profile.pdf",
        date: "2023-11-12",
        status: "Approved"
    },
    {
        id: 7,
        title: "Client Report: Serene Sanctuary Residence",
        url: "/archive/AlienAI-SL-Client Report-Serene Sanctuary Residence.pdf",
        date: "2023-10-01",
        status: "Approved"
    },
    {
        id: 8,
        title: "Client Report: Tranquil Wellness Retreat",
        url: "/archive/AlienAI-SL-Client Report-Tranquil Wellness Retreat.pdf",
        date: "2023-11-26",
        status: "Approved"
    },
    {
        id: 9,
        title: "Client Report: Urban Oasis Café",
        url: "/archive/AlienAI-SL-Client Report-Urban Oasis Café.pdf",
        date: "2023-12-27",
        status: "Approved"
    },
    {
        id: 10,
        title: "Clients Lists of AlienAI S.L.",
        url: "/archive/AlienAI-SL-Clients List.pdf",
        date: "2024-01-09",
        status: "Approved"
    },
]

export default function ArchiveTable() {
    return (
        <div className="flex-1 flex flex-col items-center gap-6 min-h-full min-w-full my-2 pr-3 lg:px-4 overflow-y-auto">
            {!!documents && documents.length > 0 &&
                <div className="flex-col flex justify-center gap-2 items-center w-full text-sm text-zinc-800 dark:text-zinc-100">
                    {documents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((item) => (
                        <ArchiveTableItem item={item} />
                    ))}
                </div>
            }

            {!!documents && documents.length === 0 && (
                <div className="flex-auto flex justify-center items-center text-sm text-zinc-700 dark:text-zinc-300">
                    <p>No messages yet</p>
                </div>
            )}
        </div>
    )
}