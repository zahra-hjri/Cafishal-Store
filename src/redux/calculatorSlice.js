import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: 0,
  reducers: {
    increament: (state, action) => state + action.payload,
    decreament: (state, action) => state - action.payload,
  },
});

export const { increament, decreament } = calculatorSlice.actions;
export default calculatorSlice.reducer;
