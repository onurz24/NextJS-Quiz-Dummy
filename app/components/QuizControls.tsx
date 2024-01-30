/* /app/components/QuizControls.tsx */
'use client';
import { FaArrowDown, FaArrowUp } from "react-icons/fa"


interface QuizControlsProps {
    snapContainerRef: any;
};
export const QuizControls = ({snapContainerRef}:QuizControlsProps) => {

    const handleScroll = (direction : string) => {
        switch(direction) {
            case "Up":
                if (snapContainerRef.current) {
                    console.log(24);
                    // Asserting the type to HTMLElement or Element
                    const container = snapContainerRef.current as HTMLElement;

                    // Implement the logic for scrolling
                    container.scrollBy({
                        top:  -window.innerHeight,
                        left: 0 ,
                        behavior: 'smooth'
                    });
                };
                break;
            case "Down" :
                        if (snapContainerRef.current) {
                            console.log(24);
                            // Asserting the type to HTMLElement or Element
                            const container = snapContainerRef.current as HTMLElement;

                            // Implement the logic for scrolling
                            container.scrollBy({
                                top:  window.innerHeight,
                                left: 0 ,
                                behavior: 'smooth'
                            });
                        };
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
