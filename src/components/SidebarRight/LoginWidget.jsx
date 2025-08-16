import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router';

const LoginWidget = () => {
    const { setUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result)
                setUser(result.user)
                navigate('/')
            }).catch((error) => {
                console.log(error.message)
            });
    }
    return (
        <div>
            <h3 className='font-semibold text-2xl py-5'>Login With</h3>
            <div className='flex flex-col gap-2'>
                <button onClick={handleGoogleLogin} className='btn btn-outline text-blue-500'> <FaGoogle /> Login with Google </button>
                <button className='btn btn-outline'> <FaGithub /> Login with Github </button>
            </div>
        </div>
    );
};

export default LoginWidget;