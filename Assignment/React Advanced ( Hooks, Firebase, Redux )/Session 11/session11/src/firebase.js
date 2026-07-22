import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9G4h18DxG7y9rg1fnEcaa7q1mDPK7eSM",
  authDomain: "react-crud-235e8.firebaseapp.com",
  projectId: "react-crud-235e8",
  storageBucket: "react-crud-235e8.firebasestorage.app",
  messagingSenderId: "164588347883",
  appId: "1:164588347883:web:13e75b28d01cdf71ad79ae",
  measurementId: "G-600CQCCPPR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);