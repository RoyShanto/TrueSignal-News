
import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
    const { setUser, createNewUser } = useContext(AuthContext);


    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createNewUser(name, email, password)
            .then((result) => {
                console.log(result)
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error.message)
            });

    }
    return (
        <div className='flex justify-center m-10'>
            <form onSubmit={handleRegister} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className=" text-center ">Register Your Account</legend>

                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <button type='submit' className="btn btn-primary mt-4">Register</button>

                <p> Have an Account ? <Link to={'/auth/login'} className='underline'>Login</Link> </p>
            </form>
        </div>
    );
};

export default Register;