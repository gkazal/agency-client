import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';



const Login = () => {
    const {loggedInUser,setLoggedInUser} = useContext(UserContext)

   const history = useHistory();
   const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName,email,photoURL} = result.user;
                const signedInUser = {name: displayName, email: email, image: photoURL}
                setLoggedInUser(signedInUser)
                console.log(signedInUser)

                history.push(from)

                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                
            });

    }

        return (
            <div>
                <h2>This is login</h2>
                <button onClick={handleGoogleSignIn}>Google sign in</button>

            </div>
        );
    };

    export default Login;