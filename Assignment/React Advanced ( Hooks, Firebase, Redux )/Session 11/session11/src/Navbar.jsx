import React from "react";
import { Link, NavLink } from "react-router-dom";

import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Navbar({ user }) {

    const logout = async () => {

        try {

            await signOut(auth);

            alert("Logged Out");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <nav>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/myorders">My Orders</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* <Link className="btn btn-info" to="/">Home</Link>{" | "}

            <Link to="/profile">Profile</Link>{" | "}

            <Link to="/myorders">My Orders</Link> */}

            {/* <br /><br /> */}

            {
                user ? (

                    <div className="d-flex my-4">
                        <h3>
                            Welcome,
                            {" "}
                            {user.displayName || user.email}
                        </h3>

                        <button className="btn btn-info ms-5" onClick={logout}>
                            Logout
                        </button>
                    </div>

                ) : (

                    <div>
                        <h3 className="mt-4">Welcome, Guest</h3>

                        {/* <Link className="btn btn-warning" to="/login">
                            Sign In
                        </Link> */}
                    </div>

                )
            }

        </nav>

    );
}

export default Navbar;