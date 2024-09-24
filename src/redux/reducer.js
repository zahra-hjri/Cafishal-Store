import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 4;
    },
    decremented: (state) => {
      state.value -= 2;
    },
  },
});

export default counterSlice.reducer;
export const { incremented, decremented } = counterSlice.actions;
