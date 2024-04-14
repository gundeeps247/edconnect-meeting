// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlRJd2cdFIH4es63eygj-GzLCaOU5Jhpo",
  authDomain: "meetings-edconnect.firebaseapp.com",
  projectId: "meetings-edconnect",
  storageBucket: "meetings-edconnect.appspot.com",
  messagingSenderId: "346973624155",
  appId: "1:346973624155:web:d6256c30fdef59c4cbec7e",
  measurementId: "G-1E1WE88SGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app)

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");