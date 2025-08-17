
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
    const { setUser, createNewUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photoUrl, email, password)

        createNewUser(email, password)
            .then((result) => {
                updateUserProfile(name, photoUrl)
                    .then(() => {
                        setUser(result.user)
                        navigate("/")
                        alert("New user created and profile updated")
                    }).catch((error) => {
                        console.log("Profile Updated error: ", error.message)
                    });
            })
            .catch((error) => {
                console.log("New user created error: ", error.message)
            });

    }
    return (
        <div className='flex justify-center m-10'>
            <form onSubmit={handleRegister} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="font-bold text-lg text-center">Register Your Account</legend>

                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" />

                <label className="label">Photo Url</label>
                <input name='photoUrl' type="text" className="input" placeholder="Photo Url" />

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