import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { textActions } from "../../../redux/text-actions";
import { getMessages, newMessage } from "../../../service/api";
import ChatFooter from "./ChatFooter";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url("/background.png");
`;
const PaddingBox = styled(Box)`
  padding: 3px 80px;
`;
const Messages = ({ conversation }) => {
  const account = useSelector((state) => state.account.accountState);
  const person = useSelector((state) => state.person.personState);
  const text = useSelector((state) => state.text.textState);
  const [messageSentFlag, setMessageSentFlag] = useState(false);
  const dispatch = useDispatch();
  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: text,
      };
      await newMessage(message);
      dispatch(textActions.setText(""));
      setMessageSentFlag((prev) => !prev);
    }
  };
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  useEffect(() => {
    const getMessagesDetail = async (conversationId) => {
      const data = await getMessages(conversationId);
      setMessages(data);
    };
    conversation._id && getMessagesDetail(conversation._id);
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }, [person, conversation._id, messageSentFlag]);
  return (
    <Wrapper>
      <Box
        sx={{
          height: "73vh",
          overflowY: "scroll",
        }}
      >
        {messages &&
          messages.map((x) => {
            return (
              <PaddingBox>
                <Message message={x} />
              </PaddingBox>
            );
          })}
        <div ref={messagesEndRef} />
      </Box>
      <ChatFooter sendText={sendText} />
    </Wrapper>
  );
};

export default Messages;
