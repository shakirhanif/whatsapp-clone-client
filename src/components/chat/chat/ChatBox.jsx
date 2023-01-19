import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getConversation } from "../../../service/api";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {
  const person = useSelector((state) => state.person.personState);
  const account = useSelector((state) => state.account.accountState);
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub, account.sub]);

  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;
