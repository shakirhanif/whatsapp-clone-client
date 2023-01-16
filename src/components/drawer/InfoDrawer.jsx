import { ArrowBack } from "@mui/icons-material";
import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import Profile from "./Profile";

const InfoDrawer = ({ open, closeDrawer }) => {
  return (
    <div>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => closeDrawer()}
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: {
            left: 10,
            top: 32,
            height: "90%",
            width: "30%",
            boxShadow: "none",
          },
        }}
        sx={{ zIndex: "1500" }}
      >
        <Box
          sx={{
            display: "flex",
            height: "92px",
            background: "#008069",
            color: "white",
          }}
        >
          <ArrowBack
            onClick={() => closeDrawer()}
            sx={{
              marginTop: "auto",
              paddingY: "8px",
              paddingX: "12px",
              fontWeight: "600",
            }}
            className="hover:cursor-pointer"
          />
          <Typography
            sx={{
              marginTop: "auto",
              paddingY: "8px",
              paddingX: "6px",
              fontWeight: "600",
            }}
          >
            Profile
          </Typography>
        </Box>
        <Box>
          <Profile />
        </Box>
      </Drawer>
    </div>
  );
};

export default InfoDrawer;
