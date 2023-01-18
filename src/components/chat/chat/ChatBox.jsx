import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {
  const person = useSelector((state) => state.person.personState);
  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} />
    </Box>
  );
};

export default ChatBox;
