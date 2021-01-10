import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon } from "@material-ui/icons";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import firebase from "firebase";
import "./chat.css";

import db from "../../firebase/firebase";
import { UserContext } from "../../context/UserContext";

const Chat = () => {
  const { chatId } = useParams();
  const [chatName, setChatName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (chatId) {
      unsubscribe = db
        .collection("chats")
        .doc(chatId)
        .onSnapshot((snapshot) => setChatName(snapshot.data().name));

      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [chatId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage === "") return;

    console.log({
      name: user.name,
      text: inputMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    db.collection("chats").doc(chatId).collection("messages").add({
      name: user.name,
      text: inputMessage,
      timestamp: new Date(),
      // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputMessage("");
  };

  console.log(messages);
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
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.name && "chat__sender"
            }`}
          >
            {message.name !== user.name && (
              <span className="chat__name">{message.name}</span>
            )}
            <span className="chat__text">{message.text}</span>
            <span className="chat__time">
              {new Date(message.timestamp.seconds * 1000).toLocaleTimeString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
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
