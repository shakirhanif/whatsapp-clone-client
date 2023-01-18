import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState: { personState: {} },
  reducers: {
    setPerson(state, action) {
      state.personState = action.payload;
    },
  },
});

export const personActions = personSlice.actions;
export default personSlice;
