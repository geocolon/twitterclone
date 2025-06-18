import useLoginModal from '@/hooks/useLoginModal';
import Modal from '../Modal';
import {useState, useCallback} from 'react';
import Input from '../Input';
import useRegisterModal from '@/hooks/useRegisterModal';


const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            
            console.log('Logging in with', { email, password });
            // Close the modal after successful login
            registerModal.onClose();
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error, e.g., show an error message
        }
        finally {
            setIsLoading(false);
        }
    }, [email, password, registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            />
            <Input 
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            />
            <Input 
            placeholder={'Username'}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
                <p> Already have an account?
                    <span
                        className="text-white cursor-pointer hover:underline">
                            Sign in
                    </span>
                </p>
        </div>
    )
    
    return (
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Create an account"
            actionLabel="Sign Up"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
        />
    );
}

export default RegisterModal;