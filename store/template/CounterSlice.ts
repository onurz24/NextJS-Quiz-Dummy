import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'Counter',
    initialState: 0,
    reducers: {
        update: (state,action) =>{
            return state += action.payload;
        }
    },
});

export const { update } = counterSlice.actions;
export default counterSlice.reducer;