import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { personActions } from "../../../redux/person-actions";
import { setConversation } from "../../../service/api";

const Conversation = ({ user }) => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account.accountState);
  const selectUser = async () => {
    dispatch(personActions.setPerson(user));
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "60px",
          cursor: "pointer",
          paddingY: "5px",
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
        <Box sx={{ paddingLeft: "20px" }}>
          <Typography sx={{ fontWeight: "600", color: "grey" }}>
            {user.name}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Conversation;
