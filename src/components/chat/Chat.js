import React from "react";
import { Avatar } from "@material-ui/core";
import "./chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          className="avatar"
          //   src={`https://ui-avatars.com/api/?name=${name}&length=1&background=random&bold=true`}
        />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
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
        {/* <p className="chat__message">Heya gyuss</p> */}
      </div>
      <div className="chat__footer"></div>
    </div>
  );
};

export default Chat;
