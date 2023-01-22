import React, { useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider } from "@mui/material";
import Conversation from "./Conversation";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { SocketContext } from "../../../context/SocketProvider";

const Conversations = () => {
  const [users, setUsers] = useState([]);
  const searchState = useSelector((state) => state.search.searchState);
  useEffect(() => {
    const myFunc = async () => {
      let response = await getUsers();
      const filteredUsers = response.filter((x) =>
        x.name.toLowerCase().includes(searchState.toLowerCase())
      );
      setUsers(filteredUsers);
    };

    myFunc();
  }, [searchState]);
  const { socket } = useContext(SocketContext);
  const account = useSelector((state) => state.account.accountState);
  useEffect(() => {
    socket.current.emit("addUser", account);
  }, []);
  return (
    <>
      <Box sx={{ height: "70vh", overflow: "auto" }}>
        {users.map(
          (x) =>
            account.sub !== x.sub && (
              <>
                <Conversation user={x} />
                <Divider sx={{ marginLeft: "98px" }} />
              </>
            )
        )}
      </Box>
    </>
  );
};

export default Conversations;
