import { FaCheck } from "react-icons/fa";

interface QuestionSubmitProps{
    snapContainerRef : any;
    correctChoices : number;
    SelectedAnswers : number;
    isValid : boolean | null;
    setIsValid : (boolean : boolean) => void;
}
export const QuestionSubmit = ({snapContainerRef,
    correctChoices,SelectedAnswers,isValid,setIsValid
    }:QuestionSubmitProps) => {

    const handleScroll = () => {
        if (snapContainerRef.current && SelectedAnswers == correctChoices) {
            console.log(24);
            // Asserting the type to HTMLElement or Element
            const container = snapContainerRef.current as HTMLElement;

            // Implement the logic for scrolling
            container.scrollBy({
                top:  window.innerHeight,
                left: 0 ,
                behavior: 'smooth'
            });
        }else{
            setIsValid(false);
            setTimeout(()=>{
                setIsValid(true);
            },500);
        }
}
    return(
        <div
        onClick={handleScroll}
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