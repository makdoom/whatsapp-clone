import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  theme: "",
  user: {
    loginStatus: "",
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
  const loginUser = (data) => {
    dispatch({ type: "LOGIN_USER", payload: data });
  };

  return (
    <UserContext.Provider
      value={{ theme: state.theme, user: state.user, loginUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
