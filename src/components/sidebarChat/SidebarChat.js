import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./sidebarchat.css";

const SidebarChat = ({ name, id }) => {
  return (
    <Link to={`/chat/${id}`}>
      <div className="sidebar__chat">
        <Avatar
          className="avatar"
          src={`https://ui-avatars.com/api/?name=${name}&length=1&background=random&bold=true`}
        />
        <div className="sidebar__chat__info">
          <h3>{name}</h3>
          <p>Last message</p>
        </div>
      </div>
    </Link>
  );
};

export default SidebarChat;
