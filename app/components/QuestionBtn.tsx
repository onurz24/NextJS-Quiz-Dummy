
"use client"
import { useState } from "react";
interface QuestionProps {
    Antworten : {
        text : string;
        isCorrect : boolean,
    },
    isMultipleChoice : boolean,
    correctChoices : number,
    SelectedQuestions : number,
    setSelectedQuestions : (number : number) => void;
    }
export const QuestionBtn = ({Antworten,isMultipleChoice, correctChoices ,
setSelectedQuestions,SelectedQuestions
} : QuestionProps ) => {


const [isDisabled, setIsDisabled] = useState(false);
const [isSelected, setIsSelected] = useState(false);


const handleSelect = () => {
        if(SelectedQuestions < correctChoices && !isSelected){
            setSelectedQuestions(SelectedQuestions + 1);
            setIsSelected(true);
        }
        if(SelectedQuestions > 0 && isSelected){
            setSelectedQuestions(SelectedQuestions - 1);
            setIsSelected(false);
        }
}
    return(
        <div
            className={`
                bg-opacity-25 text-white text-xl
                border-2 cursor-pointer
                select-none pl-4 pr-6
                ${isSelected? "bg-blue-600 transition-all " : "bg-neutral-100  transition-all "}
                ${isDisabled? "error-shake-border" : ""}
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