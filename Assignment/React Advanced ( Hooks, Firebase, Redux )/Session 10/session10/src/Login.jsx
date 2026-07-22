import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {

      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful");

      setEmail("");
      setPassword("");

    } catch (error) {

      alert("Login Failed");
      console.log(error.message);

    }
  };

  return (
    <div>

      <h2>Login</h2>

      <form onSubmit={login}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br /><br />

        <button>Login</button>

      </form>

    </div>
  );
}

export default Login;