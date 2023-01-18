import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { personActions } from "../../../redux/person-actions";

const Conversation = ({ user }) => {
  const dispatch = useDispatch();
  const selectUser = () => {
    dispatch(personActions.setPerson(user));
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
