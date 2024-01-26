'use client';
import { toggle } from "@/store/TermsSlice";
import { useDispatch, useSelector } from "react-redux";
interface AcceptTermsProps {
}

export const AcceptTerms = ({} : AcceptTermsProps) => {
    const dispatch = useDispatch();
    const Terms = useSelector((state : any) => state.Terms);
    return(
        <input
        checked={Terms}
        onChange={()=>{dispatch(toggle())}}
        className={`
            w-5 h-5 cursor-pointer
            active:scale-95 active:transition-all
            checked:hue-rotate-90
        `}
        type="checkbox" name="OptInQuiz" id="OptInQuiz"/>
    )
}