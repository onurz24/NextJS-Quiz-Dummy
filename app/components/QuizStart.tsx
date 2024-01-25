import { FaInfoCircle } from "react-icons/fa";

interface QuizStartProps {
    BG_Color : string;
}
export const QuizStart = ({BG_Color} : QuizStartProps) => {

    return(
        <div className={`
        h-full w-full
        flex flex-col items-center justify-center
        snap-center text-center`} style={{background : `${BG_Color}`}}>
            <h1 className="text-white text-2xl font-bold space tracking-wide">
                Wie viel Fitness Wissen hast du bereits ?
            </h1>
            <div className="text-white p-2 max-md:p-4">
                    Stelle dein neu erlerntes wissen auf die Probe mit dem Fitness Test
                    <br/>
                    (Manche Fragen haben mehrere richtige Antworten, andere lassen nur eine Antwort zu)
            </div>
        </div>
    )
}