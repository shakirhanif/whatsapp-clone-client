import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { InputBase } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchActions } from "../../../redux/search-actions";

const Search = () => {
  const dispatch = useDispatch();
  const setSearchState = (e) => {
    dispatch(searchActions.setSearch(e.target.value));
  };
  return (
    <Box
      sx={{
        background: "#fff",
        height: "45px",
        borderBottom: "1px solid #dbdbdb",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          background: "#f0f2f5",
          width: "90%",
          borderRadius: "10px",
          marginLeft: "10px",
        }}
      >
        <Box>
          <SearchIcon
            fontSize="small"
            sx={{
              position: "absolute",
              bottom: "4px",
              left: "5px",
              color: "grey",
            }}
          />
        </Box>
        <InputBase
          placeholder="Search or start a new chat"
          sx={{
            width: "100%",
            padding: "9px",
            height: "30px",
            marginLeft: "30px",
          }}
          onChange={setSearchState}
        />
      </Box>
    </Box>
  );
};

export default Search;
