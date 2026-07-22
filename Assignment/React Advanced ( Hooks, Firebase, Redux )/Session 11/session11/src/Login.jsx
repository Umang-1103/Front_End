import React, { useState } from "react";

import { auth } from "./firebase";

import {
    signInWithEmailAndPassword
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = async (e) => {

        e.preventDefault();

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            navigate("/");

        } catch (error) {

            alert(error.message);

        }

    };

    return (

        <form onSubmit={login}>

            <h2>Login</h2>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button className="btn btn-success">
                Login
            </button>

        </form>

    );
}

export default Login;