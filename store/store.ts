import { configureStore } from "@reduxjs/toolkit"
import SelectedQuestionsReducer from "./SelectQuestionSlice";
export const store = configureStore( {
    reducer : {
        SelectedQuestions : SelectedQuestionsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;