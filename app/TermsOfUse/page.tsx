import Link from "next/link";

interface TermsOfUseProps{}
export default function page ({}:TermsOfUseProps){

    return(
        <div className="w-full h-full text-center bg-white
        flex flex-col justify-center items-center">
            <h1>
                Das ist eine Dummy Seite ohne Datenspeicherung und Backend
            </h1>
            <Link href={"/#QuizEnd"}
                className='bg-blue-500 text-white
                rounded-md p-4 mt-4
                active:bg-blue-600 transition duration-500 ease-in-out
                max-sm:m-4'>
                Back to the Quiz
            </Link>
        </div>
    )
}
