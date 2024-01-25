import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const SelectedQuestions = createSlice({
    name: 'SelectedQuestions',
    initialState: 0,
    reducers: {
        update: (state,action) =>{
            return state += action.payload;
        },
        reset : (state) => {
            return state = 0;
        }

    },
});

export const { update , reset} = SelectedQuestions.actions;
export default SelectedQuestions.reducer;