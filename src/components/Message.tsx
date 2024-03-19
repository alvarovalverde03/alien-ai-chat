
import { TMessage } from "@/types/Message"
import { Authors } from "@/types/constants"

interface Props extends TMessage {}

export default function Message({ author, text }: Props) {
    return (
        <article>
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <img className="h8 w-8 rounded-full" 
                        src={author == Authors.USER ? '/profile-images/question.webp': '/profile-images/alien.webp'} 
                        alt="Avatar"
                    />
                </div>
                <div className="ml-3 lg:ml-4">
                    <div className="text-sm font-medium text-zinc-500 mb-1">
                        {author}
                    </div>
                    <div className="text-sm text-zinc-300">{text}</div>
                </div>
            </div>
        </article>
    )
}