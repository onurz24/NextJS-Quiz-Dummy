import { configureStore } from "@reduxjs/toolkit"
import SelectedQuestionsReducer from "./SelectQuestionSlice";
import TermsReducer from "./TermsSlice";
export const store = configureStore( {
    reducer : {
        SelectedQuestions : SelectedQuestionsReducer,
        Terms : TermsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;