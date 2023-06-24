import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import app from '../firebase/firebase.config'


export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const registerUser = async (email, password, displayName, phoneNumber) => {
        setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const newUser = {
            email,
            displayName,
            phoneNumber,
        };

        setUser(newUser);

        updateProfile(userCredential.user, {
            displayName,
            phoneNumber
        })
    };

    // 4. Google SignIn
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // 5. Logout
    const logout = () => {
        setLoading(true)
        localStorage.removeItem('speedXpress-token')
        return signOut(auth)
            .then(() => {
                toast.success("Successfully Logged Out")

            })
            .catch(err => console.log(err.message))

    }

    //6. Login with Password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //7. Forget Password
    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        //this part will execute once the component is mounted.
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        signInWithGoogle,
        logout,
        signIn,
        resetPassword,
        loading,
        setLoading,
        registerUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider