import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  isLogin: false,
  displayName: "Guest",
};

const authReducer = (state, action) => {
  switch (action.type) {

    case "LOGIN":
      return {
        ...state,
        isLogin: true,
      };

    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };

    case "UPDATE_NAME":
      return {
        ...state,
        displayName: action.payload,
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    authReducer,
    initialState
  );

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};