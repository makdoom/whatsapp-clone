import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebarchat.css";

const SidebarChat = ({ name }) => {
  return (
    <div className="sidebar__chat">
      <Avatar
        className="avatar"
        src={`https://ui-avatars.com/api/?name=${name}&length=1&background=random&bold=true`}
      />
      <div className="sidebar__chat__info">
        <h3>Room Name</h3>
        <p>Last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
