import React, { useContext } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import "./welcome.css";

import { UserContext } from "../../context/UserContext";

const Welcome = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="welcome">
      <Avatar className="avatar" src={user?.profileURL} />
      <h1>Welcome {user?.name}</h1>
      <p>
        This is a Whatsapp Clone App. To add a chat/room please click on
        <IconButton>
          <ChatIcon />
        </IconButton>
        button.
      </p>
    </div>
  );
};

export default Welcome;
