import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import Navbar from "./Navbar";
import Login from "./Login";

import Home from "./Home";
import Profile from "./Profile";
import MyOrders from "./MyOrders";

import ProtectedRoute from "./ProtectedRoute";

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

      setLoading(false);

    });

    return () => unsubscribe();

  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <Navbar user={user} />

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={
          <ProtectedRoute user={user}>
              <Home />
          </ProtectedRoute>
        } />

        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myorders"
          element={
            <ProtectedRoute user={user}>
              <MyOrders />
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  );
}

export default App;