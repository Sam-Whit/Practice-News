import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const isLoggedIn = !!user.username;

  const logOut = () => {
    localStorage.removeItem("user");
    setUser({});
  };

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
