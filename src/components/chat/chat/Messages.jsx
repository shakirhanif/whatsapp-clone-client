import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { textActions } from "../../../redux/text-actions";
import { getMessages, newMessage } from "../../../service/api";
import ChatFooter from "./ChatFooter";
import Message from "./Message";
import { useContext } from "react";
import { SocketContext } from "../../../context/SocketProvider";

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
  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const { socket, messageSentFlag, setMessageSentFlag } =
    useContext(SocketContext);
  const [incommingMessage, setIncommingMessage] = useState(null);
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncommingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, []);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: text,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }
      socket.current.emit("sendMessage", message);
      await newMessage(message);
      dispatch(textActions.setText(""));
      setFile("");
      setImage("");
      setMessageSentFlag((prev) => !prev);
    }
  };
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessagesDetail = async (conversationId) => {
      const data = await getMessages(conversationId);
      setMessages(data);
    };
    conversation._id && getMessagesDetail(conversation._id);
  }, [person, conversation._id, messageSentFlag]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);
  useEffect(() => {
    incommingMessage &&
      conversation?.members?.includes(incommingMessage.senderId) &&
      setMessages((prev) => [...prev, incommingMessage]);
  }, [incommingMessage, conversation]);
  return (
    <Wrapper>
      <Box
        sx={{
          height: "73vh",
          overflowY: "scroll",
        }}
      >
        {messages &&
          messages.map((x, index) => {
            return (
              <PaddingBox ref={scrollRef}>
                <Message message={x} key={index} />
              </PaddingBox>
            );
          })}
      </Box>
      <ChatFooter
        sendText={sendText}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
