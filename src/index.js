import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/app/App";
import UserProvider from "./context/UserContext";

ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>,
  document.getElementById("root")
);
