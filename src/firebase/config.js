import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB81groe05j9UuRM6HAAdWd7QvgudmWU7c",
    authDomain: "like-real-project.firebaseapp.com",
    projectId: "like-real-project",
    storageBucket: "like-real-project.firebasestorage.app",
    messagingSenderId: "892235847366",
    appId: "1:892235847366:web:4f317be7b0ff84bcf869c7"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);