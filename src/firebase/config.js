// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-z2mVu0ZFgiHUJ407ntVS_No_918KLHg",
  authDomain: "ilfornoreact.firebaseapp.com",
  projectId: "ilfornoreact",
  storageBucket: "ilfornoreact.appspot.com",
  messagingSenderId: "1059877605860",
  appId: "1:1059877605860:web:dced679483b44932f537f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);