import Link from "next/link";
import { PiConfettiBold } from "react-icons/pi";
import { SendQuizBtn } from "./SendQuizBtn";
import { useState } from "react";
import { AcceptTerms } from "./AcceptTerms";


interface QuestionsEndProps {
    MailTo : string;
    BG_Color: string;
}
export const QuestionsEnd = ({ BG_Color,MailTo } : QuestionsEndProps) => {


    return(
<div
    id={"QuizEnd"}
    className={`h-full w-full
        flex flex-col items-center justify-center
        snap-center`} style={{background : `${BG_Color}`}}>

            <h1 className="flex justify-center items-center gap-1 text-2xl
            ">
                <span className="-scale-x-100">
                    <PiConfettiBold />
                </span>
                <span>
                    Congratulations
                </span>
                <span>
                    <PiConfettiBold />
                </span>
            </h1>
            <h2>Your Results are waiting for you !</h2>

                {/* Form to Backend */}
                <div className="flex flex-col pt-4 gap-4 max-md:w-[80vw] max-sm:w-[95vw]">
                    <input autoComplete="email" type="email" placeholder="example@mail.com"
                    className="text-center text-xl p-2 rounded-md outline-none
                    "/>
                    <div className="flex flex-col justify-center items-center gap-2 text-center">
                        <label htmlFor="OptInQuiz">
                            I have read the&nbsp;
                            <Link href={"/TermsOfUse"} className="text-blue-800">
                                Terms of Use
                            </Link>
                            &nbsp;and accept them
                        </label>
                        <AcceptTerms/>
  
                    </div>
                    <SendQuizBtn MailTo={MailTo}/>
                </div>
    </div>
    )
}