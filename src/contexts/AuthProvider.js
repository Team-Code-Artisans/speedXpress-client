import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";





export const AuthContext = createContext()



const AuthProvider = ({children}) => {

    const [user,setUser] = useState()
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

// all authentication function will be here 

    const createUser = ( email, password )=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOutUser = () => {
        return signOut(auth)
    }

    // google connect 

    const logInUserByGoogle = ()=>{
        return signInWithPopup(auth, provider)

    }





    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

        })
        return ()=>{
            unsubscribe()
        }

       
    },[])



    let authInfo = {user,createUser,logInUser,logOutUser,logInUserByGoogle}
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;