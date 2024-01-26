import { FaCheck } from "react-icons/fa";

export const QuestionSubmit = () => {

    return(
        <div
        /* Submit Question Answer */
            className={`flex flex-row justify-center items-center
            p-2 m-4 rounded-md cursor-pointer select-none
            bg-yellow-400
            active:scale-95 transition-all duration-500`}>
            <span className="pr-2">
                Ok
            </span>
            <FaCheck/>
        </div>
    );
}