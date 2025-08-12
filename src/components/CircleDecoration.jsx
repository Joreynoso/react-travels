export default function CircleDecoration() {

    return (
        <div 
        className="absolute top-5 right-5 xl:top-10 xl:right-10 w-20 h-20 rounded-full bg-white flex justify-center items-center
        transition-transform duration-300 ease-out hover:-translate-y-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </div>
    )
}