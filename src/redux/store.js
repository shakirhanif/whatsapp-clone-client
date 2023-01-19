import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./account-actions";
import personSlice from "./person-actions";
import searchSlice from "./search-actions";
import textSlice from "./text-actions";

const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    person: personSlice.reducer,
    search: searchSlice.reducer,
    text: textSlice.reducer,
  },
});
export default store;
