import React, { useEffect, useState } from "react";

import { auth } from "./firebase";

import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();

  }, []);

  // Logout Function
  const logout = async () => {

    try {

      await signOut(auth);

      alert("Logged Out");

    } catch (error) {

      console.log(error.message);

    }

  };

  return (
    <div className="container" style={{ textAlign: "center" }}>

      <h1>Firebase Authentication</h1>

      {
        user && (
          <h3>
            Logged in as: {user.email}
          </h3>
        )
      }

      <SignUp />

      <hr />

      <Login />

      <hr />

      {
        user && (
          <Home
            user={user}
            logout={logout}
          />
        )
      }

    </div>
  );
}

export default App;