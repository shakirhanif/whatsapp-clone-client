import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: { textState: "" },
  reducers: {
    setText(state, action) {
      state.textState = action.payload;
    },
  },
});

export const textActions = textSlice.actions;
export default textSlice;
