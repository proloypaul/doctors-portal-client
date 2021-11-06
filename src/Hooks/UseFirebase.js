import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {useEffect, useState} from 'react';
import initialization from "../Component/Firebase/firebase.init";

initialization()
const UseFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth()
    
    // sign in usign google
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user
            console.log(user)
        }).catch((error) => {
            setError(error.message)
        });
    }

    // signIn and signOut state change 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              // User is signed out
            }
          });
    }, []) 

    // logOut process 
    const logOutProces = () => {
        signOut(auth).then(() => {
            setUser({})
            // Sign-out successful.
          }).catch((error) => {
            setError(error.message)
          });
    }

    const loginEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
           const user = result.user 
           setUser(user) 
        })
        .catch((error) => {
            setError(error.message)
        });
    }

    return{
        user,
        error,
        signInWithGoogle,
        logOutProces,
        loginEmailAndPassword
    }
}

export default UseFirebase;