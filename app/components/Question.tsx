/* /app/components/Question.tsx */
"use client"

import { useState } from "react";
import { QuestionBtn } from "./QuestionBtn";
import { QuestionSubmit } from "./QuestionSubmit";

interface QuestionProps {
  ID : number,
  Question_Title: string;
  BG_Color: string;
  Answers: Array<{ text: string; isCorrect: boolean }>;
  isMultipleChoice : boolean;
  correctChoices : number;
  snapContainerRef : any;
}

export const Question = ({ ID, Question_Title, BG_Color, Answers,
  isMultipleChoice, correctChoices,snapContainerRef  }: QuestionProps) => {

  /* Checks if User has Selected more than allowed */
  const [SelectedAnswers,setSelectedQuestions] = useState(0);
  const [isValid,setIsValid] = useState(true);

  return (
    <div
      className={`h-full w-full
        flex flex-col items-center justify-center
        snap-center`} style={{background : `${BG_Color}`}}
    >
      {/* Headline for each Question with Title and Question Index */}
      <h1 className="text-2xl text-white pb-6 text-center">
        {ID}. {Question_Title}</h1>
      <div className="flex flex-col w-1/2 gap-2 max-md:w-full max-lg:pr-4 max-lg:pl-4">

      {/* Loop throught all Answers of a Question and create Clickable Answer Buttons*/}
        {Answers.map((Answer, index) => (
          <QuestionBtn
          isValid={isValid}
            key={index}
            Antworten={Answer}
            isMultipleChoice={isMultipleChoice}
            correctChoices={correctChoices}
            SelectedAnswers={SelectedAnswers}
            setSelectedAnswers={setSelectedQuestions}
          />
        ))}
      </div>


          <QuestionSubmit
            correctChoices={correctChoices}
            snapContainerRef={snapContainerRef}
            SelectedAnswers={SelectedAnswers}
            isValid={isValid}
            setIsValid={setIsValid}
          />

          <div className="text-white">
            ({SelectedAnswers} of&nbsp;
            {correctChoices} selected)
          </div>
    </div>
  );
};
