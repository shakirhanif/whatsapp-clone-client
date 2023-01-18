import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./account-actions";
import personSlice from "./person-actions";

const store = configureStore({
  reducer: { account: accountSlice.reducer, person: personSlice.reducer },
});
export default store;
