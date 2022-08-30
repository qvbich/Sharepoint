import { configureStore } from "@reduxjs/toolkit";
import { fromSlice } from "./reducer";

const store = configureStore({
  reducer: fromSlice.reducer,
});

export default store;
