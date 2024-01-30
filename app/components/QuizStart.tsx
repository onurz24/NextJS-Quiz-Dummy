
import { FaCheck, FaInfoCircle, FaPlay, FaSmile, FaSmileWink } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";
import { IoFitness, IoFitnessSharp } from "react-icons/io5";
import { MdSportsMartialArts } from "react-icons/md";

interface QuizStartProps {
    BG_Color : string;
    snapContainerRef : any;
}
export const QuizStart = ({BG_Color ,snapContainerRef} : QuizStartProps) => {
    const handleScroll = () => {
                if (snapContainerRef.current) {
                    // Asserting the type to HTMLElement or Element
                    const container = snapContainerRef.current as HTMLElement;

                    // Implement the logic for scrolling
                    container.scrollBy({
                        top:  window.innerHeight,
                        left: 0 ,
                        behavior: 'smooth'
                    });
                };
        }

    return(
        <div className={`
        h-full w-full
        flex flex-col items-center justify-center
        snap-center text-center`} style={{background : `${BG_Color}`}}>
            <h1 className="text-white text-2xl font-bold space tracking-wide">
                How much Fitness knowledge do you have already ?
            </h1>
            <div className="text-white p-2 max-md:p-4">
                    Test your new knowledge with the Fitness Test!
                    <br/>
                    (Some questions may have more than one right answer,
                    while others only have one correct answer).
            </div>

        <div
            onClick={handleScroll}
            /* Start Quiz Question Button */
            className={`flex flex-row justify-center items-center
            p-2 m-4 rounded-md cursor-pointer select-none
            bg-yellow-400
            active:scale-95 transition-all duration-500`}>
            <span className="pr-2">
                Let&apos;s Start
            </span>
                <FaPlay/>
            </div>
        </div>
    )
}