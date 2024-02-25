import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBGvX0TlYdrmLdIRSLHfE7EPQAjW46bWVc",
  authDomain: "edconnect-7fc22.firebaseapp.com",
  projectId: "edconnect-7fc22",
  storageBucket: "edconnect-7fc22.appspot.com",
  messagingSenderId: "302790731895",
  appId: "1:302790731895:web:e28b6155029c1af35e7e72",
  measurementId: "G-5FBEGW4Q58"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
