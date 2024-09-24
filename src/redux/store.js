/***************************************روش جدید */
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;

/***************************************روش قدیمی */

// import { createStore } from "@reduxjs/toolkit";
// import counterReducer from "./reducer";

// const store = createStore(counterReducer);

// export default store;
