import {  GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebse/firebase.init";

const Login = () => {
  const handleGoogleSignIn = () => {
    console.log("Google SignIn Clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
     
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error);
      });
  };
const handleSignOut =() =>{
    signOut(auth).then(() =>{
        setUser(null);
        console.log('Successfully Sign Out')
    }).catch(error =>{console.log(error)})

}

  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  return (
    <div>
      <h2>Please Login</h2>
    
    {
        user ? <button onClick={handleSignOut}>
        Sign Out
      </button> :  <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    }
    <div>
<h3>
    {
  user && <div>
    <h3>{user.displayName}</h3>
    <p>{user.email}</p>
    <img src={user.photoURL} alt="User"/>
  </div>
    }
  
</h3>
    </div>
    </div>
  );
};

export default Login;
