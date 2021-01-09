import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
      </div>
      <div className="sidebar__search"></div>
      <div className="sidebar__chat"></div>
    </div>
  );
};

export default Sidebar;
