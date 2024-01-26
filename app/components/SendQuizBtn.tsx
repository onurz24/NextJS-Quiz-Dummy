"use client"
import { IoMdMail } from "react-icons/io"
import { useSelector } from "react-redux";
import { useState } from 'react';

interface SendQuizBtnProps {
    MailTo : string;
}
export const SendQuizBtn = ({ MailTo } : SendQuizBtnProps) => {

    const Terms = useSelector((state : any) => state.Terms);
    const [isDisabled,setIsDisabled] = useState(false);

    const handleQuizSubmit = () => {
        if(Terms){
            {/* Mail Clients Mail to our Company for Marketing */}
            console.log(MailTo)
            {/* Mail Client how many correct for example 9/25 correct */}
            console.log(MailTo)
            {/* Reset Everything */}
        }else{
            console.log("Did not Accept Terms");
            setIsDisabled(true);
            setTimeout(() => {
                setIsDisabled(false);
            }, 500);
        }
    }
    return(
        <button className={`flex flex-row justify-center items-center
        p-2 m-4 rounded-md cursor-pointer select-none
        gap-2 uppercase font-semibold

        ${Terms ? "bg-yellow-400 active:scale-95 transition-all duration-500"
        : "bg-yellow-400 bg-opacity-60"}
        ${isDisabled ? "error-shake" : ""}
        `}
        onClick={handleQuizSubmit}
        >
        Get results now <IoMdMail/>
        </button>
    )
}