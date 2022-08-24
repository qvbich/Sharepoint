// import { createStore } from "redux";
// import rootReducer from "./reducer";
// // import composeWithDevTools from "redux-devtools-extension";

// // const composeEnhancers = composeWithDevTools();
// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { fromSlice } from "./reducer";

const store = configureStore({
  reducer: fromSlice.reducer,
});

export default store;
