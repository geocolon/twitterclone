import { useRouter} from 'next/router';
import { useCallback } from 'react';
import { FaFeather } from 'react-icons/fa';
import useLoginModal from '@/hooks/useLoginModal';

const SidebarTweetButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const onClick = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal]);

    return (
        <button 
            onClick={onClick}>
            <div 
                className="
                mt-6
                lg:hidden
                rounded-full
                h-14
                w-14
                p-4
                flex
                items-center
                justify-center
                bg-sky-500
                hover:bg-opacity-90
                transition
                cursor-pointer
            ">
                <FaFeather size={24} color='white'/>
            </div>
            <div className="
                mt-6
                hidden
                lg:block
                rounded-full
                px-4
                py-2
                bg-sky-500
                hover:bg-opacity-90
                transition
                cursor-pointer
            ">
                <p className="
                    hidden
                    lg:block
                    text-center
                    font-semibold
                    text-white
                    text-[20px]
                ">
                    Tweet
                </p>
            </div>
        </button>
    );
}
export default SidebarTweetButton;
// This component is a simple button styled for tweeting,
// which can be used in the sidebar of a Twitter-like application.
// It includes a hover effect and basic styling for a consistent look with the rest of the sidebar.
// You can customize the button further by adding icons or additional functionality as needed.