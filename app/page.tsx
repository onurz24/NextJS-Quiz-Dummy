/* /app/page.tsx */
"use client";
import { Question } from "./components/Question";
import QuestionsList from "./QuestionsList.json";
import { QuestionsEnd } from "./components/QuizEnd";
import { QuizControls } from "./components/QuizControls";
import { QuizStart } from "./components/QuizStart";
import { useRef } from "react";

export default function Home () {

  const snapContainerRef = useRef<HTMLDivElement>(null);

  return(
    /* Vertical Snap Container */
    <div className="w-full h-full overflow-auto
      snap-mandatory snap-y scroll-smooth" ref={snapContainerRef}>
 
    {/* Welcome Text, Instructions and Start Button */}
      <QuizStart
      snapContainerRef={snapContainerRef}
      BG_Color={QuestionsList.StartScreen.BG_Color}/>

    {/* Loop through all Questions */}
      {QuestionsList.Data.map((List,index) : any  => {
        return(
          <Question
            Answers={List.Answers}
            ID={List.ID}
            BG_Color={List.BG_Color} key={index} Question_Title={List.Question_Title}
            isMultipleChoice={List.isMultipleChoice}
            correctChoices={List.correctChoices}
            snapContainerRef={snapContainerRef}
          />
          )
    })}


      {/* Congratulations Text,
        Email Input & Terms Checkbox => Results
      */}
        <QuestionsEnd
          MailTo={QuestionsList.EndScreen.MailTo}
          BG_Color={QuestionsList.EndScreen.BG_Color}
        />

        {/* Scroll to Previous or Next Snap-Screen if possible */}
        <QuizControls snapContainerRef={snapContainerRef}/>

    </div>
  )
}