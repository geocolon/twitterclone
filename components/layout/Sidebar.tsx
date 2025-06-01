import { BsHouseFill } from "react-icons/bs";

const Sidebar: React.FC = () => {
    const items = [
        { label: 'Home', href: '/', icon: BsHouseFill },
        { label: 'Profile', href: '/profile' },
        { label: 'Settings', href: '/settings' },
        { label: 'Logout', href: '/logout' },
    ];

    return (
        <div className="hidden lg:block col-span-1 border-x-[1px] border-neutral-800">
            Sidebar
        </div>
    );
}
export default Sidebar;