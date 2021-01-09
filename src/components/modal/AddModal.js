import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import "./addModal.css";

const AddModal = ({ closeModal }) => {
  const [chatInput, setChatInput] = useState("");
  const clearModal = () => {
    closeModal();
    setChatInput("");
  };
  return (
    <div className="addModal">
      <div className="modal__header">
        <h2>Add Chat</h2>
        <IconButton onClick={clearModal}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="modal__body">
        <input
          className="chat__input"
          type="text"
          placeholder="Enter room name"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <br />
        <button className="addChat">Add</button>
      </div>
    </div>
  );
};

export default AddModal;
