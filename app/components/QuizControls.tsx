/* /app/components/QuizControls.tsx */
'use client';
import { FaArrowDown, FaArrowUp } from "react-icons/fa"

export const QuizControls = () => {

    const handleScroll = (direction : string) => {
        switch(direction) {
            case "Up":
                break;
            case "Down" :
                break;
        }
    }
return(
    <div className="absolute left-8 bottom-4
    bg-white bg-opacity-50
    rounded-md
    flex gap-4 text-2xl border-2 text-white border-white p-4">

        <FaArrowUp
            onClick={()=>{handleScroll("Up")}}
            className="cursor-pointer
                drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"/>
        <FaArrowDown
            onClick={()=>{handleScroll("Down")}}
            className="cursor-pointer
                drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"/>

    </div>
)
}
