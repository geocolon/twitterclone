import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import Modal from '../Modal';
import {useState, useCallback} from 'react';
import Input from '../Input';


const LoginModal = () => {
    const loginModal = useLoginModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const registerModal = useRegisterModal();

    const onToggle = useCallback(() => {
        if (isLoading) return;

        loginModal.onClose();
        registerModal.onOpen();


    }, [isLoading, registerModal, loginModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            // Add your login logic here, e.g., API call to authenticate user
            // await login(email, password);
            console.log('Logging in with', { email, password });
            // Close the modal after successful login
            loginModal.onClose();
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error, e.g., show an error message
        }
        finally {
            setIsLoading(false);
        }
    }, [email, password, loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            />
            <Input 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div
            className="text-neutral-400 text-center mt-4 font-light">
                <p> First time using our service? 
                    <span
                        onClick={onToggle}
                        className="text-white cursor-pointer hover:underline">
                            Create an account
                    </span>
                </p>
        </div>
    )
    
    return (
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Sign In Now"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal;