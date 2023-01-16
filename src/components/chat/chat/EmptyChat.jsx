import { Box, Typography } from "@mui/material";
import React from "react";
import chat_img from "../../../assets/images/empty_chat.png";

const EmptyChat = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "35rem",
          }}
        >
          <img
            src={chat_img}
            alt="chat_image"
            style={{ height: "250px", width: "250px" }}
          />
          <Typography
            sx={{
              fontSize: "24px",
              color: "grey",
              paddingTop: "12px",
              paddingBottom: "6px",
            }}
          >
            WhatsUpp Web
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "grey" }}>
            Send and receive messages without keeping your phone online.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default EmptyChat;
