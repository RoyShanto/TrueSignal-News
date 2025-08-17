import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { setUser, signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                console.log(result)
                setUser(result.user)
                navigate('/')
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

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
        <div className='flex justify-center'>
            <form onSubmit={handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="font-bold text-lg text-center">Login Your Account</legend>

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <button type='submit' className="btn btn-primary mt-4">Login</button>
                <p>Don't Have an Account ? <Link to={'/auth/register'} className='underline'>Register</Link></p>

                <div className='text-center pt-5'>
                    <p className='font-semibold pb-2'>OR Login With: </p>
                    <div className='flex justify-center space-x-3 text-xl'>
                        <FaGoogle onClick={handleGoogleLogin} className='text-blue-500' />
                        <FaGithub className='text-blue-500' />
                        <FaFacebook className='text-blue-500' />
                    </div>
                </div>


            </form>

        </div>
    );
};

export default Login;