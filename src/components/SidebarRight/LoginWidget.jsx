import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginWidget = () => {
    return (
        <div>
            <h3 className='font-semibold text-2xl'>Login With</h3>

            <div className='flex flex-col gap-2'>
                <button className='btn btn-outline text-blue-500'> <FaGoogle /> Login with Google </button>
                <button className='btn btn-outline'> <FaGithub /> Login with Github </button>
            </div>
        </div>
    );
};

export default LoginWidget;