import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDIXLWeHDHUM3a8dmlTd4vMo7yLYt2jnQ8",
  authDomain: "zoom-clone-45a80.firebaseapp.com",
  projectId: "zoom-clone-45a80",
  storageBucket: "zoom-clone-45a80.appspot.com",
  messagingSenderId: "841932880769",
  appId: "1:841932880769:web:fb001098e71a029ccac680",
  measurementId: "G-E71WFH11R2"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
