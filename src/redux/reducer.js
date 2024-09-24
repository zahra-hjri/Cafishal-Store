/***************************************روش جدید */

import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value += 1;
    },
  },
});

export default counterSlice.reducer;
export const { incremented, decremented } = counterSlice.actions;
/***************************************روش قدیمی */
// const initialState = {
//   count: 0,
//   payload1: 5,
//   payload2: 3,
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         count: state.count + state.payload1,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         count: state.count - state.payload2,
//       };
//     default:
//       return state;
//   }
// };

// export default counterReducer;
