import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const account = useSelector((state) => state.account.accountState);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#EDEDED",
        }}
      >
        <img
          src={account.picture}
          alt="dp"
          style={{
            borderRadius: "50%",
            height: "150px",
            width: "150px",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        />
      </Box>
      <Box
        sx={{
          paddingTop: "12px",
          paddingLeft: "30px",
          paddingBottom: "2px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          sx={{ fontSize: "13px", fontWeight: "200", color: "#009688" }}
        >
          Your Name
        </Typography>
        <Typography sx={{ maginX: "14px", color: "#4a4a4a" }}>
          {account.name}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            paddingY: "20px",
            paddingX: "25px",
            fontSize: "13px",
            color: "#8696a0",
            background: "#ededed",
          }}
        >
          This is not your username or pin. This name will be visible to your
          Whatsupp contact
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: "12px",
          paddingLeft: "30px",
          paddingBottom: "2px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          sx={{ fontSize: "13px", fontWeight: "200", color: "#009688" }}
        >
          About
        </Typography>
        <Typography>Eat, Sleep, Code, Repeat</Typography>
      </Box>
      <Box
        sx={{
          background: "#EDEDED",
          height: "110px",
        }}
      ></Box>
    </>
  );
};

export default Profile;
