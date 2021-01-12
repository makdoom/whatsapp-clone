import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./sidebarchat.css";

import db from "../../firebase/firebase";

const SidebarChat = ({ name, id }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (id) {
      db.collection("chats")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [id]);

  return (
    <NavLink to={`/chat/${id}`} activeClassName="is__active">
      <div className="sidebar__chat">
        <Avatar
          className="avatar"
          src={`https://ui-avatars.com/api/?name=${name}&length=1&background=random&bold=true`}
        />
        <div className="sidebar__chat__info">
          <h3>{name}</h3>
          <p>{messages[0]?.text}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default SidebarChat;
