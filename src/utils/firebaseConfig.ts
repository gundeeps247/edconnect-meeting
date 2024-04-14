import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAAQ6baXz8NxS94A_S4Ejpq7hdTkFWyPyU",
  authDomain: "meet-app-fec14.firebaseapp.com",
  projectId: "meet-app-fec14",
  storageBucket: "meet-app-fec14.appspot.com",
  messagingSenderId: "379579171528",
  appId: "1:379579171528:web:e3eed64bfd8569c2bb9bfd",
  measurementId: "G-ZJR8H1PSEQ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
