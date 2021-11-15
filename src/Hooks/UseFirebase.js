import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import {useEffect, useState} from 'react';
import initialization from "../Component/Firebase/firebase.init";

initialization()
const UseFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth()
    
    // sign in usign google
    const signInWithGoogle = (history, location) => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user
            // console.log(user)

            // after login destination
            const destination = location?.state?.from || '/';
            history.replace(destination)
            
            saveUser(user.email, user.displayName, 'PUT')

        }).catch((error) => {
            setError(error.message)
        });
    }

    // signIn and signOut state change 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              getIdToken(user)
              .then(idToken => {
                // console.log(idToken)
                setToken(idToken)
              })
            } else {
              // User is signed out
            }
          });
    }, [auth]) 

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
            // save user data to database
            saveUser(email, name, 'POST')
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

    // POST and PUT method data sending to server
    const saveUser = (email, name, method) => {
      const user = {email, name}
      const url = `http://localhost:3800/users`
      fetch(url, {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then()
    }

    // find admin 
    useEffect(() => {
      const url = `http://localhost:3800/users/${user.email}`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setAdmin(data.admin)
        })
    }, [user.email])
    return{
        user,
        error,
        admin,
        token,
        signInWithGoogle,
        logOutProces,
        loginEmailAndPassword,
        registerWithEmailAndPassword
    }
}

export default UseFirebase;