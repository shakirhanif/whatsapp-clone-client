import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { downloadMedia, formatDate } from "../../../Utils/common-utils";
import { useSelector } from "react-redux";
import { GetApp } from "@mui/icons-material";
import pdf_icon from "../../../assets/images/pdf_icon.png";

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  align-items: center;
  border-radius: 10px;
  word-break: break-word;
`;
const Received = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;
const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;
const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  word-break: keep-all;
  margin-top: auto;
`;
const Message = ({ message }) => {
  const account = useSelector((state) => state.account.accountState);
  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Own>
      ) : (
        <Received>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Received>
      )}
    </>
  );
};
const ImageMessage = ({ message }) => {
  return (
    <Box sx={{ position: "relative" }}>
      {message?.text?.includes(".pdf") ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={pdf_icon}
            alt="pdf"
            style={{
              width: "80px",
            }}
          />
          <Typography sx={{ paddingLeft: "5px", fontSize: "14px" }}>
            {message.text.split("/").pop()}
          </Typography>
        </Box>
      ) : (
        <>
          <img
            src={message.text}
            alt={message.text}
            style={{
              maxWidth: "300px",
              maxHeight: "100px",
              objectFit: "cover",
            }}
          />
        </>
      )}
      <Time sx={{ position: "absolute", bottom: 0, right: 0 }}>
        <GetApp
          sx={{
            marginRight: "10px",
            border: "1px solid grey",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          fontSize="small"
          onClick={(e) => downloadMedia(e, message.text)}
        />
        {formatDate(message.createdAt)}
      </Time>
    </Box>
  );
};
const TextMessage = ({ message }) => {
  return (
    <>
      <Text> {message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  );
};

export default Message;
