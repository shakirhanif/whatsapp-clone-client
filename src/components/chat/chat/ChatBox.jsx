import { Box } from "@mui/material";
import React from "react";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {
  return (
    <Box>
      <ChatHeader />
      <Messages />
      <ChatFooter />
    </Box>
  );
};

export default ChatBox;
