"use client"
import { IoMdMail } from "react-icons/io"

interface SendQuizBtnProps {
    MailTo : string;
}
export const SendQuizBtn = ({ MailTo } : SendQuizBtnProps) => {

    const handleQuizSubmit = () => {
        {/* Mail Clients Mail to our Company for Marketing */}
        console.log(MailTo)
        {/* Mail Client how many correct for example 9/25 correct */}
        console.log(MailTo)
        {/* Reset Everything */}
    }
    return(
        <button className="flex flex-row justify-center items-center
        p-2 m-4 rounded-md cursor-pointer select-none
        bg-yellow-400 gap-2 uppercase font-semibold
        active:scale-95 transition-all duration-500
        "
        onClick={handleQuizSubmit}
        >
        Get results now <IoMdMail/>
        </button>
    )
}