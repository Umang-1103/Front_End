import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#222" : "#fff",
        padding: "20px",
      }}
    >
      <h2>Instagram Theme Demo</h2>
    </nav>
  );
};

export default Navbar;