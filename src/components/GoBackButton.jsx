import { useNavigate } from "react-router-dom"

function GoBackButton() {
    const navigate = useNavigate()

    const arrowSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
    )

    return (
        <div className="flex justify-center items-center p-3 mt-5">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors cursor-pointer"
            >
                <span className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-200">
                    {arrowSvg}
                </span>
                <span className="font-medium text-sm">go back</span>
            </button>
        </div>
    )
}

export default GoBackButton