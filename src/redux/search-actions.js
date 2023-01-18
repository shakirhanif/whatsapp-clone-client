import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchState: '' },
  reducers: {
    setSearch(state, action) {
      state.searchState = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;