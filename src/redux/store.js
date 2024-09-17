import { createStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";

const store = createStore(counterReducer);

export default store;
