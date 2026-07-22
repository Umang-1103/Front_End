// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9G4h18DxG7y9rg1fnEcaa7q1mDPK7eSM",
  authDomain: "react-crud-235e8.firebaseapp.com",
  projectId: "react-crud-235e8",
  storageBucket: "react-crud-235e8.firebasestorage.app",
  messagingSenderId: "164588347883",
  appId: "1:164588347883:web:d5fe39f8345b0f36ad79ae",
  measurementId: "G-27MBX652V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebasedb = getFirestore(app)