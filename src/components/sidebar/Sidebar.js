import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "./sidebar.css";

import SidebarChat from "../sidebarChat/SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="avatar" />
        <div className="sidebar__header__right">
          <IconButton>
            <Brightness7Icon className="darkmode__icon" />
          </IconButton>
          <IconButton>
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
        <SidebarChat name="Makdoom" />
        <SidebarChat name="Mahek" />
        <SidebarChat name="Adnan" />
        <SidebarChat name="Afsha" />
      </div>
    </div>
  );
};

export default Sidebar;
