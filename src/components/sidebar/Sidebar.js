import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "./sidebar.css";

import SidebarChat from "../sidebarChat/SidebarChat";
import db from "../../firebase/firebase";

const Sidebar = ({ setModal }) => {
  const [chatNames, setChatNames] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChatNames(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="avatar" />
        <div className="sidebar__header__right">
          <IconButton>
            <Brightness7Icon className="darkmode__icon" />
          </IconButton>
          <IconButton onClick={setModal}>
            <ChatIcon className="chat__icon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="more__icon" />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="search__box">
          <SearchIcon />
          <input
            type="text"
            className="search__field"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      <div className="sidebar__chats">
        {chatNames.map((chatName) => (
          <SidebarChat
            key={chatName.id}
            id={chatName.id}
            name={chatName.data.name}
          />
        ))}
        {/* <SidebarChat name="Makdoom" />
        <SidebarChat name="Mahek" />
        <SidebarChat name="Adnan" />
        <SidebarChat name="Afsha" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
