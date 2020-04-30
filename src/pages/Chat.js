import Moment from "react-moment";
import React, { useState, useEffect } from "react";
import { withChatkitOneToOne } from "@pusher/chatkit-client-react";
import { Button } from "reactstrap";
import Image from "react-graceful-image";
import { NavLink as Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import LoadingIndicator from "../components/LoadingIndicator";
// import ChatUserList from "./ChatUserList";
import "./Chat.css";
import defaultAvatar from "../assets/images/default-profile.png";
import matt from "../assets/images/matt.png";

function Chat(props) {
  const [pendingMessage, setPendingMessage] = useState("");
  const messageList = React.createRef();

  const handleMessageKeyDown = event => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleMessageChange = event => {
    setPendingMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (pendingMessage === "") {
      return;
    }
    // TODO: Send message to Chatkit
    props.chatkit.sendSimpleMessage({ text: pendingMessage });
    setPendingMessage("");
  };

  useEffect(() => {
    messageList.current.scrollTop = messageList.current.scrollHeight;
  });

  // TODO: Show messages from Chatkit
  const messages = props.chatkit.messages.map(m => ({
    id: m.id,
    isOwnMessage: m.sender.id === props.chatkit.currentUser.id,
    createdAt: m.createdAt,
    // This will only work with simple messages.
    // To learn more about displaying multi-part messages see
    // https://pusher.com/docs/chatkit/reference/javascript#messages
    textContent: m.parts[0].payload.content
  }));

  return (
    <div className="page">
      <div className="Chat">
        <div className="Chat__titlebar">
          <Button
            className="Back__button"
            tag={Link}
            to="/chatlist"
          >
            <i class="fas fa-caret-left"></i>
          </Button>
          {props.chatkit.isLoading ? (
            <img
              src={defaultAvatar}
              className="Chat__titlebar__avatar"
              alt="avatar"
            />
          ) : (
              <Image src={matt} className="Chat__titlebar__avatar" alt="avatar" />
            )}
          <div className="Chat__titlebar__details">
            <span>
              <h4>{props.chatkit.isLoading ? "..." : "Matthew Cross"}</h4>
              <p className="Chat__titlebar__details__presence">
                {props.chatkit.isLoading ? "..." : "online"}
              </p>
            </span>
          </div>
        </div>
        <div className="bar">
        </div>
        <div className="Chat__messages" ref={messageList}>
          <div
            className="Loading__indicator"
            style={
              props.chatkit.isLoading
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <LoadingIndicator />
          </div>
          <div className="lines">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
          </div>
          {messages.map(m => (
            <Message key={m.id} {...m} />
          ))}
        </div>
        <div className="Chat__compose">
          <input
            className="Chat__compose__input"
            type="text"
            placeholder="Type a message..."
            value={pendingMessage}
            onChange={handleMessageChange}
            onKeyDown={handleMessageKeyDown}
          />
          <button className="Chat__compose__button" onClick={handleSendMessage}>
            <span className="hb hb-sm hex">
              <i class="far fa-paper-plane"></i>
            </span>
          </button>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

function Message({ isOwnMessage, isLatestMessage, createdAt, textContent }) {
  return (
    <div
      className={
        isOwnMessage
          ? "Chat__messages__message__wrapper Chat__messages__message__wrapper--self"
          : "Chat__messages__message__wrapper Chat__messages__message__wrapper--other"
      }
    >
      <div className="Chat__messages__message__wrapper__inner">
        <div
          className={
            isOwnMessage
              ? "Chat__messages__message Chat__messages__message--self"
              : "Chat__messages__message Chat__messages__message--other"
          }
        >
          <div className="Chat__messages__message__content">{textContent}</div>
          <div className="Chat__messages__message__time">
            <Moment
              calendar={{
                sameDay: "LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[last] dddd [at] LT"
              }}
            >
              {createdAt}
            </Moment>
          </div>
          <div
            className={
              isOwnMessage
                ? "Chat__messages__message__arrow alt"
                : "Chat__messages__message__arrow"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default withChatkitOneToOne(Chat);
