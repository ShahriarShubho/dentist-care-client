import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfiq";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var { displayName, email } = result.user;
        const user = { name: displayName, email: email };
        setLoggedInUser(user)
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
      });
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        Google Sing IN
      </button>
      <h1>{loggedInUser.name}</h1>
    </div>
  );
};

export default LogIn;
