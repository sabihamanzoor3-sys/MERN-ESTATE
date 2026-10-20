// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-93246.firebaseapp.com",
  projectId: "mern-estate-93246",
  storageBucket: "mern-estate-93246.firebasestorage.app",
  messagingSenderId: "735383017080",
  appId: "1:735383017080:web:c166a2090110b886bebf8d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);