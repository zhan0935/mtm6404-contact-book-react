import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDucAV-exc_TRITDRkgYfYpVFrI-rqYsY8",
  authDomain: "mtm6404-contact-book-2d8d7.firebaseapp.com",
  projectId: "mtm6404-contact-book-2d8d7",
  storageBucket: "mtm6404-contact-book-2d8d7.firebasestorage.app",
  messagingSenderId: "731314457620",
  appId: "1:731314457620:web:be455645802cd45124ab01"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;