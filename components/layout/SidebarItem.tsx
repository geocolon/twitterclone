import { IconType } from 'react-icons';
import { ReactNode } from 'react';

import Link from 'next/link';

interface SidebarItemProps {
    label: string;
    href?: string;
    onClick?: () => void;
    icon: IconType;
    className?: string;
    children?: ReactNode; // 🧠 tells TS you're accepting JSX
}

const SidebarItem: React.FC<SidebarItemProps> = ({
        label,
        href,
        onClick,
        icon: Icon,
    }) => {
        const content = (
            <div className="flex flex-row items-center">
                <div
                    className="
                        relative
                        rounded-full
                        h-14
                        w-14
                        flex
                        items-center
                        justify-center
                        hover:bg-blue-300
                        hover:bg-opacity-10
                        p-4
                        cursor-pointer
                        lg:hidden
                    "
                >
                    <Icon size={24} color='white' />
                </div>
                <div
                    className="
                    relative
                    hidden
                    lg:flex
                    items-center
                    gap-4
                    p-4
                    rounded-full
                    hover:bg-blue-300
                    hover:bg-opacity-10
                    cursor-pointer
                    "
                >
                    <Icon size={24} color='white' />
                    <p className="hidden lg:block text-white text-xl">
                        {label}
                    </p>
                </div>

            </div>
        );

        if (href) {
            return (
                <Link href={href} onClick={onClick} className="block">
                    {content}
                </Link>
            );
        }
        return (
            <div onClick={onClick}>
                {content}
            </div>
        );
}
export default SidebarItem;
