
import PDFIcon from "@/icons/PDFIcon";
import { TMessage } from "@/types/Message"
import { Authors } from "@/types/constants"

interface Props extends TMessage { }

export default function Message({ author, text, documents }: Props) {
    const uniqueDocs = documents ? documents.filter((doc, index, self) =>
        index === self.findIndex((d) => (
            d.url === doc.url
        ))
    ) : null;

    return (
        <article>
            <div className="flex items-start max-w-full">
                <div className="flex-shrink-0">
                    <img className="h8 w-8 rounded-full"
                        src={author == Authors.USER ? '/profile-images/question.webp' : '/profile-images/alien.webp'}
                        alt="Avatar"
                    />
                </div>
                <div className="ml-3 lg:ml-4 max-w-full">
                    <div className="text-sm font-medium text-zinc-500 mb-1">
                        {author}
                    </div>
                    <div className="text-sm text-zinc-300">
                        {uniqueDocs && (
                            <div className="mb-3 mt-2 grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {uniqueDocs.map((doc, index) => (
                                    <a key={index} href={doc.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-start gap-3 p-3 text-sm rounded-lg w-full max-h-16 h-16 overflow-hidden toggle-full-view focus:z-10 focus:ring-2 focus:ring-gray-500 bg-none focus:outline-none text-gray-400 border border-gray-600 hover:text-gray-300 hover:bg-black">
                                        <div className="opacity-70 flex items-center justify-center">
                                            <PDFIcon />
                                        </div>
                                        <div className="line-clamp-2">
                                            {doc.title}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                        {text}
                    </div>
                </div>
            </div>
        </article>
    )
}