import { MoreVert, Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ChatHeader = () => {
  const account = useSelector((state) => state.account.accountState);
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
            src={account.picture}
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
          <Typography sx={{ fontWeight: "600" }}>{account.name}</Typography>
          <Typography sx={{ color: "grey", fontSize: "13px" }}>
            Online Status
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
