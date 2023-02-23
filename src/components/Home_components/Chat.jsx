import React, { useContext } from "react";
import Input from "./Input";
import Messages from "./Messages";
import { ChatContext } from "../../context/ChatContext";
import { UilVideo } from "@iconscout/react-unicons";
import { UilEllipsisH } from "@iconscout/react-unicons";
import { UilUserPlus } from "@iconscout/react-unicons";
const Chat = () => {
  const {data}=useContext(ChatContext);
  return (
    <div className="chat">
      <div className="messages">
      <div className="Head">
      <div className="recent-chat">
      <img src={data.user?.photoURL} alt="" />
        <span>{data.user?.displayName}</span>
        </div>
        <div className="friend">
          <div className="camera"><UilVideo className="more"     /></div>
          <div className="camera"><UilUserPlus className="more"  /></div>
          <UilEllipsisH  />
        </div>
      </div>
    </div>
      <Messages />
      <Input />      
      </div>
  );
};

export default Chat;
