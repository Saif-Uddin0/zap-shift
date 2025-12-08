import React, { useEffect, useState } from 'react';
import { AuthContext } from './Context';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    console.log(user);
    

// register
    const registerUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

// observer
useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            
        })
        return ()=>{
            unsubscribe();
        }
    },[])

// signIn
const signInUser =(email ,password) =>{
    return signInWithEmailAndPassword(auth, email ,password)
}


// signOut
const signOutUser = ()=>{
    return signOut(auth)
}

// googleSign
const googleSignIn =()=> {return signInWithPopup(auth ,googleProvider)}
    

    const authinfo = {
        registerUser,
        signInUser,
        signOutUser,
        user,
        setUser,
        googleSignIn
    }


    return <AuthContext value={authinfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;