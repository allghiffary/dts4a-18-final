// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL52g_XhFSvvuG5-ncaxAhYFNr0BWKKyU",
  authDomain: "authfirebase-80289.firebaseapp.com",
  projectId: "authfirebase-80289",
  storageBucket: "authfirebase-80289.appspot.com",
  messagingSenderId: "758225204959",
  appId: "1:758225204959:web:4c0064024272b66ee95b6a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
