import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
// import React from 'react';

const Sidebar: React.FC = () => {
    const items = [
        { label: 'Home', href: '/', icon: BsHouseFill },
        { label: 'Notifications', href: '/notifications', icon: BsBellFill },
        { label: 'Profile', href: '/users/123', icon: FaUser },
    ];

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="flex items-center space-x-2 p-3 rounded-full hover:bg-blue-300 hover:bg-opacity-10 transition cursor-pointer"
                        >
                            <item.icon size={20} color="white" />
                            <span className="text-white">{item.label}</span>
                        </a>
                    ))};
                </div>
            </div>
        </div>
    );
}
export default Sidebar;