import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";
import React from "react";

const ChatFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#ededed",
        height: "50px",
        paddingLeft: "20px",
        paddingRight: "20px",
        "& > *": {
          marginX: "5px",
          color: "#919191",
        },
      }}
    >
      <EmojiEmotionsOutlined />
      <AttachFile sx={{ transform: "rotate(40deg)" }} />
      <Box
        sx={{
          background: "#fff",
          marginY: "10px",
          alignItems: "center",
          borderRadius: "18px",
          width: "60rem",
        }}
      >
        <InputBase
          placeholder=" Type a message"
          sx={{ marginLeft: "10px", width: "100%", fontSize: "14px" }}
        ></InputBase>
      </Box>
      <Mic sx={{ marginLeft: "auto" }} />
    </Box>
  );
};

export default ChatFooter;
