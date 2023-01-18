import { Box, Typography } from "@mui/material";
import React from "react";

const Conversation = ({ name, picture }) => {
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
      >
        <Box sx={{ paddingLeft: "30px" }}>
          <img
            src={picture}
            alt="dp"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
        </Box>
        <Box sx={{ paddingLeft: "20px" }}>
          <Typography sx={{ fontWeight: "600", color: "grey" }}>
            {name}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Conversation;
