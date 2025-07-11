import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { BiArrowBack } from 'react-icons/bi';

interface HeaderProps {
    label: string;
    showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <header className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row item-center gap-2">
                {
                 showBackArrow && (
                    <BiArrowBack 
                        onClick={handleBack} 
                        size={20} 
                        className="text-white
                        hover:opacity-70
                        cursor-pointer
                        hover:text-neutral-300
                        transition" 
                    />
                )} 
                <h1 className="text-white text-xl font-semibold">
                    {label}
                </h1>   
            </div>
        </header>
    );
}

export default Header;
