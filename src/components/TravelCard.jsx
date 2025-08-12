

export default function TravelCard({ destination, country, imageUrl }) {

    return (
        <>
            {/* travel card */}
            <div className="relative overflow-hidden
            bg-gradient-to-b from-neutral-200 to-neutral-300 h-72 sm:h-80 rounded-xl p-3 sm:p-4 flex flex-col justify-end items-center
            transition-transform duration-300 ease-out hover:-translate-y-2 hover: 2">

                <div
                    className="absolute inset-0 rounded-xl bg-center bg-cover"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>

                <div className="z-10 w-full bg-white rounded-lg h-40 flex flex-col justify-center items-center text-center px-4 py-6">

                    <h3 className="font-bold text-sm sm:text-xl leading-tight text-gray-900">{destination}</h3>
                    <h4 className="font-medium text-sm sm:text-xl leading-tight mb-4 text-gray-500">{country}</h4>

                    <button className="bg-black hover:bg-gray-800 active:scale-95 rounded-full px-3 py-2 sm:px-6 sm:py-3 text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-200">
                        see details
                    </button>
                </div>
            </div>
        </>
    )
}