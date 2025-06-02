import { IconType } from 'react-icons';
import { ReactNode } from 'react';

interface SidebarItemProps {
    label: string;
    href?: string;
    className?: string;
    icon: IconType;
    children?: ReactNode; // 🧠 tells TS you're accepting JSX
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
        label, 
        href, 
        icon: Icon,
        onClick    
    }) => {
        return (
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
                    ">
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
                ">
                    <Icon size={24} color='white' />
                    <p className="hidden lg:block text-white text-xl">
                        {label}
                    </p>
                </div>

            </div>
    );
}
export default SidebarItem;
// Last modified: 2025-06-01

// 16:58