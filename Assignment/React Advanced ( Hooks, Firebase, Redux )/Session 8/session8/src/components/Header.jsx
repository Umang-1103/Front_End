import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor:
          state.theme === "light" ? "#ffffff" : "#222222",
        color: state.theme === "light" ? "#000000" : "#ffffff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Current Theme : {state.theme}</h2>

      <button
        onClick={() =>
          dispatch({ type: "TOGGLE_THEME" })
        }
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Header;