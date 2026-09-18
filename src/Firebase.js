// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1dlj-J6bp9I2q2dpF9YTAFoia0rNToaw",
  authDomain: "physics-41d5e.firebaseapp.com",
  projectId: "physics-41d5e",
  storageBucket: "physics-41d5e.firebasestorage.app",
  messagingSenderId: "996498839423",
  appId: "1:996498839423:web:4cc4dee9ee7cd9a8822c4a",
  measurementId: "G-VLZT0M43P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, analytics, db };
