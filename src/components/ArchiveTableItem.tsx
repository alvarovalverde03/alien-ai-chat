import { Document } from '@/components/ArchiveTable'
import LinkExternalIcon from '@/icons/LinkExternalIcon';
import { LinkButton } from './Button';

interface Props {
    item: Document;
}

export default function ArchiveTableItem({ item }: Props) {
    return (
        <div key={item.id} className="flex flex-row justify-between items-center gap-6 lg:gap-8 w-full px-2 py-4 border-b border-zinc-400">
            <div className="flex flex-col gap-1">
                <p className="text-base mb-1">{item.title}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.date}</p>
                {/*}
                    <p className="text-sm font-semibold">{item.status}</p>
                {*/}
            </div>
            <div className="flex flex-col">
                <LinkButton 
                    href={item.url}
                    icon={<LinkExternalIcon />}
                    target_blank={true}
                />
            </div>
        </div>
    )
}