import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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

    // register with email and password

    const registerWithEmailAndPassword = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // const user = result.user 
            // console.log(user)
            setError('')
            const newUser = {email, displayName : name}
            setUser(newUser)
            updateProfile(auth.currentUser, {
                displayName:name 
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            history.replace('/')
        })
        .catch((error) => {
            setError(error.message)
        });
    }
    

    // login with email and password 
    const loginEmailAndPassword = (email, password, history, location) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
           const user = result.user 
           const destination = location?.state?.from || '/';
           history.replace(destination)
           setUser(user) 
           setError('')
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
        loginEmailAndPassword,
        registerWithEmailAndPassword
    }
}

export default UseFirebase;