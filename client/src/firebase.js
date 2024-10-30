// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-16710.firebaseapp.com",
  projectId: "mern-estate-16710",
  storageBucket: "mern-estate-16710.firebasestorage.app",
  messagingSenderId: "505753057051",
  appId: "1:505753057051:web:3c40237509b0fd4088c5be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);