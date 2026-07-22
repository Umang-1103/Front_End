import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const user = {
    id: 1,
    name: "Bhavesh",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};