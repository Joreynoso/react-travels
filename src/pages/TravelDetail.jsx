// --> imports
import { useTravel } from "../context/TravelContext"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import LoadingCard from '../components/LoadingCard'
import ErrorCard from '../components/ErrorCard'
import CircleDecoration from "../components/CircleDecoration"
import GoBackButton from "../components/GoBackButton"
import { motion } from 'framer-motion'

export default function TravelsDetail() {

    const [destination, setDestination] = useState()
    const { id } = useParams()
    const { loading, error, setError, getDestinationById, deleteDestination } = useTravel()
    const [isOpen, setIsOpen] = useState(false)

    // handle modal
    function handleModal() {
        setIsOpen(prev => !prev)
    }

    // useNavigate
    const navigate = useNavigate()

    // handleDeletete
    async function handleDelete() {
        try {
            await deleteDestination(destination.id)
            navigate("/travels")
        } catch (error) {
            setError(error)
        }

    }

    // useEffect
    useEffect(() => {
        if (!id) return

        const fetchDestination = async () => {
            const data = await getDestinationById(id)
            setDestination(data)
        }

        fetchDestination()
    }, [id])

    // condicional rendering
    if (loading) return <LoadingCard />
    if (error) return <ErrorCard />
    if (!destination) return <p className="text-center">Not destination found..</p>

    // icon location
    const locationIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
    )

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full min-h-screen flex flex-col items-center">

                <GoBackButton />

                {/* title */}
                <h3 className="text-3xl  md:text-4xl lg:text-5xl font-medium text-center sm:max-w-2xl max-w-lg leading-snug mb-10">
                    Every moment here tells a story — make it yours.
                </h3>

                <div className='w-full max-w-4xl flex flex-col sm:flex-row justify-center items-center gap-4'>

                    {/* left image section */}
                    <div className='relative w-full bg-neutral-300 h-[250px] sm:h-[400px] rounded-2xl overflow-hidden bg-center bg-cover'>
                        <img src={destination.urlImage} alt={destination.destination} className="w-full h-full bg-center bg-cover" />
                        <CircleDecoration />
                    </div>

                    {/* rigth text section */}
                    <div className='w-full h-[350px] py-4 flex flex-col justify-between'>
                        <div className='w-full flex flex-col gap-3'>
                            <h3 className='font-medium text-xl sm:text-2xl md:text-3xl flex items-center'>
                                <span className='mr-2'>
                                    {locationIcon}
                                </span> {destination.destination}
                            </h3>
                            <p className='text-base font-medium text-black/80'>"{destination.description}"
                            </p>
                            <p className="inline-block px-3 py-1 rounded-full border border-gray-300 text-gray-700 font-medium">
                                Country: {destination.country}
                            </p>

                            <p className="inline-block px-3 py-1 rounded-full border border-gray-300 text-gray-700 font-medium">
                                Visited: {destination.visited ? 'already visited' : 'not visited yet'}
                            </p>
                        </div>

                        {/* botones acción */}
                        <div className="flex gap-4 mt-6">
                            <Link
                                to={`edit`}
                                className="text-center cursor-pointer flex-1 text-sm sm:text-normal bg-black text-white font-semibold rounded-full px-4 py-2
                                                transition-transform duration-300 ease-out hover:-translate-y-2
                                                hover: 2">
                                Edit
                            </Link>

                            <button
                                onClick={handleModal}
                                disabled={loading}
                                className="cursor-pointer flex-1 text-sm sm:text-normal border border-black font-semibold rounded-full px-4 py-2
                                               transition-transform duration-300 ease-out hover:-translate-y-2
                                                hover: 2">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

                {/* modal */}
                {isOpen ? (
                    <mo className='fixed inset-0 bg-black/60 flex justify-center items-center p-3 z-50'>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className='relative w-full max-w-xl bg-white p-10 rounded-lg shadow-lg flex flex-col gap-3 text-center'>
                            <h3 className='text-lg font-medium'>
                                ¿Are you sure to delete <br /> this destination?
                            </h3>

                            <div className='flex gap-4'>
                                <button
                                    onClick={handleModal}
                                    className='w-full bg-white cursor-pointer flex-1 text-sm sm:text-normal border border-black font-semibold rounded-full px-4 py-2
                           transition-transform duration-300 ease-out hover:-translate-y-2'
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={handleDelete}
                                    className='w-full bg-black text-white cursor-pointer flex-1 text-sm sm:text-normal border border-black font-semibold rounded-full px-4 py-2
                           transition-transform duration-300 ease-out hover:-translate-y-2'
                                >
                                    Delete
                                </button>

                                <button
                                    onClick={handleModal}
                                    className='absolute top-5 right-5 text-lg cursor-pointer'>
                                    x
                                </button>
                            </div>
                        </motion.div>
                    </mo>
                ) : null}

            </motion.div>
        </>
    )
}