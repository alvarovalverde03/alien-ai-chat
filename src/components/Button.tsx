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
            data-tooltip-target="button-disabled-example-full-screen-tooltip"
            className={`${className} ${responsiveText ? 'w-9 lg:w-fit' : 'w-fit'} flex items-center justify-center h-9 px-2 gap-1 text-xs font-medium border rounded-lg toggle-full-view focus:z-10 focus:ring-2 focus:ring-gray-500 bg-gray-950 focus:outline-none text-gray-400 border-gray-600 hover:text-white hover:bg-neutral-900`}
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