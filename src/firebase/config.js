import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firestore'
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYtn5bMSmSZE76EwPf37Z5QxiI6JgdZWc",
  authDomain: "olx-clone-react-8285d.firebaseapp.com",
  projectId: "olx-clone-react-8285d",
  storageBucket: "olx-clone-react-8285d.appspot.com",
  messagingSenderId: "711854868327",
  appId: "1:711854868327:web:1737b02780a48689dc11c2",
  measurementId: "G-9YEBZS6RG9"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);