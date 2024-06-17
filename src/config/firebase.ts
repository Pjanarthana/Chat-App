// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmbJoAY3C4tGcu8oApN0ij0gwS24fDuqU",
  authDomain: "typescript-67c22.firebaseapp.com",
  projectId: "typescript-67c22",
  storageBucket: "typescript-67c22.appspot.com",
  messagingSenderId: "799633414531",
  appId: "1:799633414531:web:320c78c4396663bbbafeb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);