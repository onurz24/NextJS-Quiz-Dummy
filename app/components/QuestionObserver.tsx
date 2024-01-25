"use client";
import { useEffect, useState, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const QuestionObserver = ({ID,isMultipleChoice, correctChoices } : any) => {
    const dispatch = useDispatch();
    const SelectedQuestions =
    useSelector((state : any) => state.SelectedQuestions);

    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries: any) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

    return () => {
        if (containerRef.current) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            observer.unobserve(containerRef.current);
        }
    };
    }, [containerRef, options]);
    return(
    <>
        <div ref={containerRef}
            className={`flex flex-row justify-center items-center
            p-2 m-4 rounded-md cursor-pointer select-none
            ${isVisible? "bg-yellow-400" : "bg-yellow-500"}
           
            active:scale-95 transition-all duration-500

        `}>
            <span className="pr-2">
                Ok
            </span>
            <FaCheck/>
        </div>

        <div className="text-white">
            ({SelectedQuestions} Ausgewählt)
        </div>
        </>
    );};
