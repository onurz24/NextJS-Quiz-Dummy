/* /app/page.tsx */

import { Question } from "./components/Question";
import QuestionsList from "./QuestionsList.json";
import { QuestionsEnd } from "./components/QuizEnd";
import { QuizControls } from "./components/QuizControls";
import { QuizStart } from "./components/QuizStart";

export default function Home () {

  return(
    <div className="w-full h-full overflow-auto
    snap-mandatory snap-y scroll-smooth
    ">

        <QuizStart BG_Color={QuestionsList.StartScreen.BG_Color}/>
                {QuestionsList.Data.map((List,index) : any  => {
                    return  (<Question
                      Antworten={List.Antworten}
                      ID={List.id}
                      BG_Color={List.BG_Color} key={index} Title={List.frage}
                      isMultipleChoice={List.isMultipleChoice}
                      correctChoices={List.correctChoices}
                      />)
                })}

                <QuestionsEnd
                  MailTo={QuestionsList.EndScreen.MailTo}
                  BG_Color={QuestionsList.EndScreen.BG_Color}/>

                <QuizControls/>
    </div>
  )
}