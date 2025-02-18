import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../redux/calculatorSlice";

const store = configureStore({
  reducer: {
    number: calculatorReducer,
  },
});

export default store;
