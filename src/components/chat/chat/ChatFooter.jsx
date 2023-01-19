import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { textActions } from "../../../redux/text-actions";

const ChatFooter = ({ sendText }) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.textState);
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
          onChange={(e) => dispatch(textActions.setText(e.target.value))}
          onKeyPress={sendText}
          value={text}
        />
      </Box>
      <Mic sx={{ marginLeft: "auto" }} />
    </Box>
  );
};

export default ChatFooter;
