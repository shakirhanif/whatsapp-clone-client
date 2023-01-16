import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: { accountState: null },
  reducers: {
    setAccount(state, action) {
      state.accountState = action.payload;
    },
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice;
