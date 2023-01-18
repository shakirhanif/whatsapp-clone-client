import React, { useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider } from "@mui/material";
import Conversation from "./Conversation";
import { useSelector } from "react-redux";

const Conversations = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const myFunc = async () => {
      let response = await getUsers();
      setUsers(response);
    };

    myFunc();
  }, []);
  const account = useSelector((state) => state.account.accountState);

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
