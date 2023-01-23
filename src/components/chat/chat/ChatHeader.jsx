import { MoreVert, Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { SocketContext } from "../../../context/SocketProvider";

const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(SocketContext);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#ededed",
        paddingX: "10px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <img
            src={person.picture}
            alt="dp"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              marginLeft: "10px",
              marginRight: "10px",
              marginTop: "3px",
              marginBottom: "2.5px",
            }}
          />
        </Box>
        <Box sx={{ marginLeft: "15px", marginTop: "7px" }}>
          <Typography sx={{ fontWeight: "600" }}>{person.name}</Typography>
          <Typography sx={{ color: "grey", fontSize: "13px" }}>
            {activeUsers?.find((user) => user.sub === person.sub)
              ? "online"
              : "offline"}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginLeft: "auto" }}>
        <Search sx={{ paddingX: "10px" }} />
        <MoreVert sx={{ paddingX: "10px" }} />
      </Box>
    </Box>
  );
};

export default ChatHeader;
