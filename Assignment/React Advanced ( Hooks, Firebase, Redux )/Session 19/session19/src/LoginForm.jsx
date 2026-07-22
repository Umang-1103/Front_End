import { useState } from "react";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (e) => {
        e.preventDefault();

        if (email && password) {
            setIsLoggedIn(true);
        } else {
            alert("Enter Email and Password");
        }
    };

    return (
        <div>

            {
                isLoggedIn ? (

                    <h2>Welcome {email}</h2>

                ) : (

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

                        <button>
                            Login
                        </button>

                    </form>

                )
            }

        </div>
    );
}

export default LoginForm;