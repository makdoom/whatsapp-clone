import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon } from "@material-ui/icons";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import "./chat.css";

import db from "../../firebase/firebase";

const Chat = () => {
  const { chatId } = useParams();
  const [chatName, setChatName] = useState("");

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .onSnapshot((snapshot) => setChatName(snapshot.data().name));
    }
  }, [chatId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          className="avatar"
          src={`https://ui-avatars.com/api/?name=${chatName}&length=1&background=random&bold=true`}
        />
        <div className="chat__headerInfo">
          <h3>{chatName}</h3>
          <p>Last seen at ...</p>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Makdoom Shaikh</span>
          <span className="chat__text">heya gyuss wasssuppp</span>
          <span className="chat__time">10:42 am</span>
        </p>
        <p className={`chat__message ${true && "chat__sender"}`}>
          {true && <span className="chat__name">Makdoom Shaikh</span>}
          <span className="chat__text">heya gyuss wasssuppp</span>
          <span className="chat__time">10:42 am</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Makdoom Shaikh</span>
          <span className="chat__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptate corrupti voluptatibus quas, molestiae iure sapiente,
            quidem maxime eius sint similique!
          </span>
          <span className="chat__time">10:42 am</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">button</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
