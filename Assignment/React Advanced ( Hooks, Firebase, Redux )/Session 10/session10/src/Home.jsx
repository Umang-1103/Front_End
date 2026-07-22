import React from "react";

function Home({ user, logout }) {
  return (
    <div className="my-5">

      <h2>Home Page</h2>

      <h3>Welcome</h3>

      <p>{user?.email}</p>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Home;