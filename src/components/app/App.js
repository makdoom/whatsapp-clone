import { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "../sidebar/Sidebar";
import AddModal from "../modal/AddModal";
import Chat from "../chat/Chat";
import Login from "../login/Login";
import Welcome from "../welcome/Welcome";
import { UserContext } from "../../context/UserContext";

function App() {
  const { user, darkTheme } = useContext(UserContext);

  const [modalState, setModalState] = useState(false);

  const setModal = () => {
    setModalState(!modalState);
  };
  const closeModal = () => {
    setModalState(!modalState);
  };

  return (
    <div className={`app ${!darkTheme && "light__mode"}`}>
      {!user.loginStatus ? (
        <Login />
      ) : (
        <>
          <div className={`modal__background modal__showing__${modalState}`}>
            <AddModal closeModal={closeModal} />
          </div>
          <div className="app__body">
            <Router>
              <Sidebar setModal={setModal} />
              <Switch>
                <Route path="/chat/:chatId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Welcome />
                </Route>
              </Switch>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
