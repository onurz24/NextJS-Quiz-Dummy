/* /app/components/QuizControls.tsx */

import { FaArrowDown, FaArrowUp } from "react-icons/fa"

export const QuizControls = () => {
return(
    <div className="absolute left-8 bottom-4
    bg-white bg-opacity-50
    rounded-md
    flex gap-4 text-2xl border-2 text-white border-white p-4">

        <FaArrowUp
            className="cursor-pointer
                drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"/>
        <FaArrowDown
            className="cursor-pointer
                drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"/>

    </div>
)
}