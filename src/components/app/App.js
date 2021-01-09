import { useState } from "react";
import "./App.css";

import Sidebar from "../sidebar/Sidebar";
import AddModal from "../modal/AddModal";

function App() {
  const [modalState, setModalState] = useState(false);
  const setModal = () => {
    setModalState(!modalState);
  };

  const closeModal = () => {
    setModalState(!modalState);
  };

  return (
    <div className="app">
      <div className={`modal__background modal__showing__${modalState}`}>
        <AddModal closeModal={closeModal} />
      </div>
      <div className="app__body">
        {/* <Sidebar component /> */}
        <Sidebar setModal={setModal} />

        {/* <Chat Component /> */}
      </div>
    </div>
  );
}

export default App;
