import { useRouter} from 'next/router';
import { BsTwitter } from 'react-icons/bs';

const SidebarLogo = () => {
    const router = useRouter();


    return (
        <button 
            onClick={() => router.push('/')}
            className="
                rounded-full
                h-14
                w-14
                flex
                p-4
                items-center
                justify-center
                hover:bg-blue-300
                hover:bg-opacity-10
                transition
                cursor-pointer
        ">
            <BsTwitter size={24} color='white'/>
        </button>
    );
}
export default SidebarLogo;
