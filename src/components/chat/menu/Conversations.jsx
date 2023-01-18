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
      <Box sx={{ height: "81vh", overflow: "overlay" }}>
        {users.map(
          (x) =>
            account.sub !== x.sub && (
              <>
                <Conversation name={x.name} picture={x.picture} sub={x.sub} />
                <Divider sx={{ marginLeft: "98px" }} />
              </>
            )
        )}
      </Box>
    </>
  );
};

export default Conversations;
