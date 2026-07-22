import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {

  const { state, dispatch } = useContext(AuthContext);

  return (
    <div>

      <h2>Instagram Profile</h2>

      <h3>Name : {state.displayName}</h3>

      <h3>
        Status :
        {state.isLogin ? " Logged In" : " Logged Out"}
      </h3>

      <button
        onClick={() =>
          dispatch({ type: "LOGIN" })
        }
      >
        Login
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          dispatch({ type: "LOGOUT" })
        }
      >
        Logout
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_NAME",
            payload: "Bhavesh Goswami",
          })
        }
      >
        Update Name
      </button>

    </div>
  );
};

export default Profile;