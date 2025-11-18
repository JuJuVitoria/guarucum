/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  const persistUser = (user) => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  };

  const login = (user) => {
    setCurrentUser(user);
    persistUser(user);
  };
  
  const logout = () => {
    setCurrentUser(null);
    persistUser(null);
  };
  
  useEffect(() => {
    setIsLoading(false);
  }, []); 

  const contextValue = {
    currentUser,
    login,
    logout,
    isLoading,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}