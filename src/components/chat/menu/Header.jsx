import { Box } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Header = () => {
  const account = useSelector((state) => state.account.accountState);
  const [openDrawer, setOpenDrawer] = useState("false");
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  const closeDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "44px",
          background: "#ededed",
          paddingX: "8px",
          paddingY: "8px",
        }}
      >
        <img
          src={account.picture}
          alt="dp"
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            border: "1px solid grey",
          }}
          onClick={toggleDrawer}
          className="hover:cursor-pointer"
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <DonutLargeIcon sx={{ marginRight: "10px" }} />
          <ChatIcon sx={{ marginX: "10px", paddingTop: "2px" }} />
          <HeaderMenu sx={{ marginLeft: "4px" }} toggleDrawer={toggleDrawer} />
        </Box>
      </Box>
      <InfoDrawer open={openDrawer} closeDrawer={closeDrawer} />
    </>
  );
};

export default Header;
