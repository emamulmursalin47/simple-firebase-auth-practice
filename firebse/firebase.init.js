// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVQX-amIkz45Sljt9R9qiLgd2iVhgD0xg",
  authDomain: "simple-firebase-auth-3184a.firebaseapp.com",
  projectId: "simple-firebase-auth-3184a",
  storageBucket: "simple-firebase-auth-3184a.firebasestorage.app",
  messagingSenderId: "36134394735",
  appId: "1:36134394735:web:3e66227cf6d1a81ceca69a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

