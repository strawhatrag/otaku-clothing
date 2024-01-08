// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVoAh9EIQSKlj17atPLNEMIEAVid06als",
  authDomain: "otaku-clothing-database.firebaseapp.com",
  projectId: "otaku-clothing-database",
  storageBucket: "otaku-clothing-database.appspot.com",
  messagingSenderId: "366016810648",
  appId: "1:366016810648:web:3987a1f525d27652afcaed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
