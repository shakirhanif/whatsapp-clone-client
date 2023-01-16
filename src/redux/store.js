import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./account-actions";

const store = configureStore({
  reducer: { account: accountSlice.reducer },
});
export default store;
