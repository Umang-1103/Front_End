import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import About from "./About";

function Home() {
  return <h1>Home Page</h1>;
}


function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : "light"}>
      <h1>Music Player</h1>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <p>Welcome to my React Music Player.</p>
      <BrowserRouter>
        <nav>
          <NavLink to="/" style={{textDecoration: "none", color: "Blue"}}>Home</NavLink> |{" "}
          <NavLink to="/about" style={{textDecoration: "none", color: "Blue"}}>About</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;