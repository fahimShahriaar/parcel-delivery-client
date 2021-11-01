import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import './Login.css';

const provider = new GoogleAuthProvider();

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    // console.log(user);
    const history = useHistory();
    const location = useLocation();
    const path = location.state?.from.pathname;
    console.log(location.state?.from);
    console.log(path);

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                const { displayName, email, photoURL, uid } = result.user;
                const loggedInUSer = {
                    name: displayName,
                    email,
                    img: photoURL,
                    id: uid
                }
                setUser(loggedInUSer);
                history.push(path)

            }).catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Sign-out successful.");
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>
            <div className="formContainer my-5 mx-auto p-5 shadow">
                <div className="text-center">
                    {!user.email ?
                        <button onClick={handleGoogleSignIn} className="btn btn-success px-4 mx-2">Sign in with Google</button> :
                        <button onClick={handleGoogleSignOut} className="btn btn-danger px-4 mx-2">Sign out</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;