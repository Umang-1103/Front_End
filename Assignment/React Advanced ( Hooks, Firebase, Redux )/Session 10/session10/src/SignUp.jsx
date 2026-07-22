import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("User Registered Successfully");

      console.log(userCredential.user);

      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button>Register</button>
      </form>
    </div>
  );
}

export default SignUp;