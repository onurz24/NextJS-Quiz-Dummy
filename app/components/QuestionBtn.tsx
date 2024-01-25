
"use client"

import { update,reset } from "@/store/SelectQuestionSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
interface QuestionProps {
    Antworten : {
        text : string;
        isCorrect : boolean,
    },
    isMultipleChoice : boolean,
    correctChoices : number,
}
export const QuestionBtn = ({Antworten,isMultipleChoice, correctChoices } : QuestionProps ) => {


const [isDisabled, setIsDisabled] = useState(false);
const [isSelected, setIsSelected] = useState(false);
const dispatch = useDispatch();
const SelectedQuestions = useSelector((state : any ) => state.SelectedQuestions);
const handleSelect = () => {
        if(SelectedQuestions < correctChoices && !isSelected){
            dispatch(update(1))
            setIsSelected(true);
        }
        /*
        if(SelectedQuestions >= correctChoices && !isSelected){{
            setIsDisabled(true);
            setTimeout(() => {
                setIsDisabled(false);
            }, 500);
        */
        if(SelectedQuestions > 0 && isSelected){
            dispatch(update(-1))
            setIsSelected(false);
        }
}
    return(
        <div
            className={`
                bg-opacity-25 text-white text-xl
                border-2 cursor-pointer
                select-none pl-4 pr-6
                ${isSelected? "bg-blue-600 transition-all duration-500" : "bg-neutral-100  transition-all duration-500"}
                ${isDisabled? "error-shake" : ""}
                `}
            onClick={handleSelect}>
                {Antworten.text}
                {/* Dev. Info */}
                <div>
                    {Antworten.isCorrect ? "(correct)"  : "(incorrect)"}
                </div>
        </div>
    )
}