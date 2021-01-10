import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  theme: "",
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

  return (
    <UserContext.Provider
      value={{
        theme: state.theme,
        user: state.user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
