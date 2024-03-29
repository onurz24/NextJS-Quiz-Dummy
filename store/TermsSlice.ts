import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const SelectedQuestions = createSlice({
    name: 'Terms',
    initialState: false,
    reducers: {
        toggle: state =>{
            return !state
        },
    },
});

export const { toggle} = SelectedQuestions.actions;
export default SelectedQuestions.reducer;