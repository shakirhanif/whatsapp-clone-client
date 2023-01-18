import { Box } from "@mui/material";
import React from "react";
import Conversations from "./Conversations";
import Header from "./Header";
import Search from "./Search";

const Menu = () => {
  return (
    <div>
      <Box>
        <Header />
        <Search />
        <Conversations />
      </Box>
    </div>
  );
};

export default Menu;
