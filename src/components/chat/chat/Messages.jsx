import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import ChatFooter from "./ChatFooter";

const Wrapper = styled(Box)`
  background-image: url("/background.png");
`;
const Messages = () => {
  return (
    <Wrapper>
      <Box sx={{ height: "73vh", overflowY: "scroll" }}></Box>
      <ChatFooter />
    </Wrapper>
  );
};

export default Messages;
