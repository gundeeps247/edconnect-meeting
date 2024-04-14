import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAEli1GIgxE6QJDoH6BfWgKZIUarQXeDtQ",
  authDomain: "meeting-fa92a.firebaseapp.com",
  projectId: "meeting-fa92a",
  storageBucket: "meeting-fa92a.appspot.com",
  messagingSenderId: "911974788529",
  appId: "1:911974788529:web:72249ab98109ff4800e190",
  measurementId: "G-G7YYR7T9S5"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
