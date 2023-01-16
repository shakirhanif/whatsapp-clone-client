import { Box, Dialog } from "@mui/material";
import React from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";

const Chat = () => {
  return (
    <Dialog
      open={true}
      hideBackdrop={true}
      maxWidth={"md"}
      PaperProps={{
        sx: {
          height: "100%",
          width: "100%",
          maxWidth: "100%",
          marginX: "10px",
          marginY: "0px",
          borderRadius: "0px",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <Box sx={{ width: "30%", minWidth: "260px", height: "100%" }}>
          <Menu />
        </Box>
        <Box
          sx={{
            width: "70%",
            minWidth: "300px",
            height: "100%",
            borderLeft: "solid 3px rgba(0,0,0,0.14)",
          }}
        >
          <EmptyChat />
        </Box>
      </Box>
    </Dialog>
  );
};

export default Chat;
