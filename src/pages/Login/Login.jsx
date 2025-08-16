import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { setUser, signInUser } = useContext(AuthContext)


    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                console.log(result)
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error.message)
            });

    }

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-center pt-12">Login Your Account</legend>

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <button type='submit' className="btn btn-primary mt-4">Login</button>
                <p>Don't Have an Account ? <Link to={'/auth/register'} className='underline'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;