import Sidebar from "./layout/Sidebar";
import FollowBar from "./layout/FollowBar";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
           <div className="container mx-auto xl:px=30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
                <Sidebar />
                <div className="
                col-span-3 
                lg:col-span-2 
                border-x-[1px]
                border-neutral-800
                ">
                    {children}
                </div>
                <FollowBar />
            </div>
           </div>
        </div>
    );
}
export default Layout;