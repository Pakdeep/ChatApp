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
        <span>{data.user?.displayName}</span>
        <div className="friend">
          <UilVideo className="more"     />
          <UilUserPlus className="more"  />
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
