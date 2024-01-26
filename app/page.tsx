/* /app/page.tsx */

import { Question } from "./components/Question";
import QuestionsList from "./QuestionsList.json";
import { QuestionsEnd } from "./components/QuizEnd";
import { QuizControls } from "./components/QuizControls";
import { QuizStart } from "./components/QuizStart";

export default function Home () {

  return(
    /* Vertical Snap Container */
    <div className="w-full h-full overflow-auto
      snap-mandatory snap-y scroll-smooth">

    {/* Welcome Text, Instructions and Start Button */}
      <QuizStart BG_Color={QuestionsList.StartScreen.BG_Color}/>

    {/* Loop through all Questions */}
      {QuestionsList.Data.map((List,index) : any  => {
        return(
          <Question
            Answers={List.Answers}
            ID={List.ID}
            BG_Color={List.BG_Color} key={index} Question_Title={List.Question_Title}
            isMultipleChoice={List.isMultipleChoice}
            correctChoices={List.correctChoices}
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
        <QuizControls/>

    </div>
  )
}