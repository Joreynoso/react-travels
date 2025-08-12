// --> imports
import TravelCard from "../components/TravelCard"
import { useTravel } from "../context/TravelContext"
import { Link } from 'react-router-dom'
import LoadingCard from '../components/LoadingCard'
import ErrorCard from '../components/ErrorCard'
import EmtpyCard from '../components/EmptyCard'
import { motion } from 'framer-motion'

export default function TravesList() {

    // --> use custom hook
    const { travels, error, loading } = useTravel()

    // --> map list items
    const travelListItems = travels.map(travel => (
        <Link
            key={travel.id}
            to={`${travel.id}`}>
            <TravelCard
                destination={travel.destination}
                country={travel.country}
                imageUrl={travel.urlImage}
            />
        </Link>
    ))

    // --> condicional rendering
    if (loading) return <LoadingCard />
    if (error) return <ErrorCard />

    return (
        <>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full min-h-screen flex flex-col items-center">

                {/* title */}
                <h3 className="text-3xl  md:text-4xl lg:text-5xl font-medium text-center sm:max-w-2xl max-w-lg leading-snug mb-10">
                    Plan, capture, and share your journeys — all in one place.
                </h3>

                {/* filters section */}
                <div className="w-full flex flex-wrap justify-centeritems-center gap-3 mb-8">

                    {/* add new destination section */}
                    <Link
                        to={"new"}
                        className="text-xs sm:text-sm bg-black px-3 py-1 rounded-full text-white cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-2">new destination</Link>
                </div>

                {travels.length !== 0 ?
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5">
                        {travelListItems}
                    </div> :

                    <EmtpyCard />}

            </motion.div>
        </>
    )
}