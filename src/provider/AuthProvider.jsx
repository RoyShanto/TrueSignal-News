import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})


    const createNewUser = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        signOut(auth).then(() => {
            console.log("LogOut Successful")
            setUser(null)
        }).catch((error) => {
            console.log(error.message)
        });
    }

console.log("user", user)


    const authInfo = {
        user,
        setUser,
        createNewUser,
        signInUser,
        logOut
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;