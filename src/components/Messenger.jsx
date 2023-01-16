import React from "react";
import LoginDialogue from "./account/LoginDialogue";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import Chat from "./chat/Chat";

const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #00a884;
  box-shadow: none;
`;

const Messenger = () => {
  const account = useSelector((state) => state.account.accountState);
  return (
    <>
      {account ? (
        <>
          <LoginHeader position="static" sx={{ height: "125px" }}>
            <Toolbar></Toolbar>
          </LoginHeader>
          <Chat />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialogue />
        </>
      )}
    </>
  );
};

export default Messenger;
