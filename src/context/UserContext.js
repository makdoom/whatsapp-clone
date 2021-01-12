import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  darkTheme: true,
  user: {
    loginStatus: false,
    name: "",
    email: "",
    profileURL: "",
  },
};

// Create context
export const UserContext = createContext(initialState);

// Creating provider
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Login action
  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  // Theme toggle
  const themeToggle = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <UserContext.Provider
      value={{
        darkTheme: state.darkTheme,
        user: state.user,
        setUser,
        themeToggle,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
