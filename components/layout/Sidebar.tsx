import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
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
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            />
                    ))};
                    <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    );
}
export default Sidebar;