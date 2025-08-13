import { useTravel } from "../context/TravelContext"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import LoadingCard from "../components/LoadingCard"
import ErrorCard from "../components/ErrorCard"
import { useForm } from "react-hook-form"
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import toastifyStyle from '../helpers/toastifyStyle'

export default function TravelUpdate() {
    console.log(toastifyStyle

    )
    const { error, loading, travels, updateDestination } = useTravel()
    const { id } = useParams()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ mode: 'onChange' })

    useEffect(() => {
        const travelFound = travels.find(travel => travel.id === id)
        if (travelFound) {
            reset(travelFound)
        }
    }, [id, travels, reset])

    async function handleUpdate(data) {
        try {
            await updateDestination(id, data)
            toast.success('Destination updated', toastifyStyle)
            navigate("/travels", { replace: true })

        } catch (error) {
            console.error(error)
        }
    }

    const urlImageRules = {
        required: 'URL is required',
        pattern: {
            value: /^https?:\/\/.+/i,
            message: 'Must be a valid URL'
        }
    }

    const descriptionRules = {
        required: 'Description is required',
        minLength: { value: 10, message: 'At least 10 characters' }
    }

    const destinationRules = {
        required: 'Destination is required',
        minLength: { value: 3, message: 'At least 3 characters' }
    }

    const countryRules = {
        required: 'Country is required',
        minLength: { value: 3, message: 'At least 3 characters' }
    }

    const styleValidations = "text-xs italic text-red-400 font-semibold leading-tight"

    // condicional rendering
    if (loading) return <LoadingCard />
    if (error) return <ErrorCard />

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full min-h-screen flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center sm:max-w-2xl max-w-lg leading-snug mb-10">
                Edit and keep your travel story up to date.
            </h3>

            <div className="w-full min-h-screen flex flex-col items-center">
                <form onSubmit={handleSubmit(handleUpdate)} className="w-full max-w-xl flex flex-col gap-3">

                    <input
                        id="destination"
                        type="text"
                        placeholder="Your destination here"
                        {...register('destination', destinationRules)}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base placeholder-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {errors.destination && <p className={styleValidations}>{errors.destination.message}</p>}

                    <input
                        id="country"
                        type="text"
                        placeholder="Country destination"
                        {...register('country', countryRules)}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base placeholder-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {errors.country && <p className={styleValidations}>{errors.country.message}</p>}

                    <textarea
                        id="description"
                        placeholder="Add a short description about your trip or destination"
                        {...register('description', descriptionRules)}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base placeholder-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-black min-h-20 resize-none"
                    />
                    {errors.description && <p className={styleValidations}>{errors.description.message}</p>}

                    <input
                        id="urlImage"
                        type="text"
                        placeholder="Put your URL image here"
                        {...register('urlImage', urlImageRules)}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base placeholder-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {errors.urlImage && <p className={styleValidations}>{errors.urlImage.message}</p>}

                    <button
                        className="w-full bg-black rounded-full px-3 py-3 text-white font-medium mt-10
                       transition-transform duration-300 ease-out hover:-translate-y-2"
                    >
                        let's travel
                    </button>
                </form>
            </div>
        </motion.div>
    )
}
