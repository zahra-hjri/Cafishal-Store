import { createSlice } from "@reduxjs/toolkit";

const CalculatorSlice = createSlice({
    name:'calculator',
    initialState:0,
    reducers:{
        inc:(state,action)=>state+action.payload,
        dec:(state,action)=>state-action.payload
    }
})

export const {inc , dec} = CalculatorSlice.actions
export default CalculatorSlice.reducer