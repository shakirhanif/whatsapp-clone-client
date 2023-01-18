import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./account-actions";
import personSlice from "./person-actions";
import searchSlice from "./search-actions";

const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    person: personSlice.reducer,
    search: searchSlice.reducer,
  },
});
export default store;
