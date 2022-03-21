import initializeAuthentication from './../Pages/FormPage/Firebase/Firebase.init';
import { useEffect, useState } from "react";
import {
    getAuth,
    signOut,
    getIdToken,
    updateProfile,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
//initilaitzeFirebase
initializeAuthentication()

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('');

    /* =========LogIn with Google========= */
    const loginWithGoogle = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                // saveUserToDB(user.email, user.displayName, 'PUT')
                const destination = location.state?.from || '/';
                navigate(destination)
                setAuthError('')
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    /* =========== User Register ========*/
    const registerUser = (email, password, name, navigate,) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                /*----save user to the Database ---*/
                // saveUserToDB(email, name, 'POST')

                /*=== send name to firebase after creation ===*/
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                navigate('/')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    /*======= login withEmail and Password ========*/
    const loginWithEmailAndPassword = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location.state?.from || '/';
                navigate(destination)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    // //*-----find admin----*//
    // useEffect(() => {
    //     fetch(`https://dry-harbor-11353.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])

    // //*-----find admin----*//
    // useEffect(() => {
    //     fetch(`https://dry-harbor-11353.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])

    /* ========= Sing out =========== */
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    /* === Save User To The Database ==== */
    // const saveUserToDB = (email, displayName, method) => {

    //     const user = { email, displayName };
    //     fetch('https://dry-harbor-11353.herokuapp.com/users', {
    //         method: method,
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //         })
    // }

    /* ===== Observer user State ====== */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                        // console.log(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    return {
        user,
        admin,
        token,
        logOut,
        setUser,
        authError,
        isLoading,
        registerUser,
        loginWithGoogle,
        loginWithEmailAndPassword,
    }
};

export default useFirebase;