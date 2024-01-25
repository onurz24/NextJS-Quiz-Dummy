/* /app/components/Question.tsx */


import { QuestionBtn } from "./QuestionBtn";
import { QuestionObserver } from "./QuestionObserver";
interface QuestionProps {
  ID : number,
  Title: string;
  BG_Color: string;
  Antworten: Array<{ text: string; isCorrect: boolean }>;
  isMultipleChoice : boolean;
  correctChoices : number;
}

export const Question = ({ ID, Title, BG_Color, Antworten,
  isMultipleChoice, correctChoices }: QuestionProps) => {

  return (
    <div
      className={`h-full w-full
        flex flex-col items-center justify-center
        snap-center`} style={{background : `${BG_Color}`}}
    >
      <h1 className="text-2xl text-white pb-6 text-center">
        {ID}. {Title}</h1>
      <div className="flex flex-col w-1/2 gap-2 max-md:w-full max-lg:pr-4 max-lg:pl-4">
        {Antworten.map((antwort, index) => (
          <QuestionBtn
            key={index}
            Antworten={{ text: antwort.text, isCorrect: antwort.isCorrect }}
            isMultipleChoice={isMultipleChoice} correctChoices={correctChoices}
          />
        ))}
      </div>

      <QuestionObserver
      ID={ID}
      isMultipleChoice={isMultipleChoice}
      correctChoices={correctChoices}/>

    </div>
  );
};
