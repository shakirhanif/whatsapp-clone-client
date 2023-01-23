import { Box, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketProvider";
import { personActions } from "../../../redux/person-actions";
import { getConversation, setConversation } from "../../../service/api";
import { formatDate } from "../../../Utils/common-utils";

const Conversation = ({ user }) => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account.accountState);
  const [message, setMessage] = useState("");
  const { messageSentFlag } = useContext(SocketContext);
  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [messageSentFlag]);
  const selectUser = async () => {
    dispatch(personActions.setPerson(user));
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "60px",
          cursor: "pointer",
          paddingY: "5px",
          width: "100%",
        }}
        onClick={selectUser}
      >
        <Box sx={{ paddingLeft: "30px" }}>
          <img
            src={user.picture}
            alt="dp"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
        </Box>
        <Box sx={{ paddingLeft: "20px", width: "100%", overflow: "hidden" }}>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ fontWeight: "600", color: "grey", paddingLeft: "10px" }}
            >
              {user.name}
            </Typography>
            {message?.text && (
              <Typography
                sx={{
                  marginLeft: "auto",
                  paddingRight: "10px",
                  fontSize: "13px",
                  color: "#00000099",
                }}
              >
                {formatDate(message?.timestamp)}
              </Typography>
            )}
          </Box>
          <Typography sx={{ fontSize: "14px" }}>
            {message?.text?.includes(".jpg") ||
            message?.text?.includes(".png") ||
            message?.text?.includes(".pdf")
              ? "media"
              : message.text}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Conversation;
