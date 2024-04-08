import Link from "next/link";

interface LinkButtonProps {
    href: string;
    icon?: React.ReactNode;
    text?: string;
    responsiveText?: boolean;
    className?: string;
    target_blank?: boolean;
}

export function LinkButton({ href, icon, text, responsiveText, className, target_blank }: LinkButtonProps) {
    return (
        <Link
            className={`${className} ${responsiveText ? 'w-9 lg:w-fit' : 'w-fit'} flex items-center justify-center gap-1 h-9 px-2 text-xs font-medium toggle-full-view bg-gray-300 dark:bg-gray-950 hover:bg-neutral-200 dark:hover:bg-neutral-900 text-gray-700 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 border rounded-lg border-gray-400 dark:border-gray-600 focus:z-10 focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500 focus:outline-none`}
            href={href}
            target={target_blank ? '_blank' : '_self'}
        >
            {icon}

            {text && (
                <span 
                    className={`${responsiveText ? 'hidden lg:block' : 'block'} text-nowrap`}
                >
                    {text}
                </span>
            )}
        </Link>
    )
}