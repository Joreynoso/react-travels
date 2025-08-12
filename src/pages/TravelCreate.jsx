// --> imports 
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useTravel } from "../context/TravelContext"
import LoadingCard from "../components/LoadingCard"
import ErrorCard from "../components/ErrorCard"
import GoBackButton from "../components/GoBackButton"
import { motion } from 'framer-motion'

export default function TravelsCreate() {

    // setting statesF
    const navigate = useNavigate()
    const { error, loading, createDestination } = useTravel()

    // useForm hook desctructuring
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    // handle create function
    async function handleCreate(data) {
        try {
            console.log('-->[FORM DATA] data received', data)
            await createDestination(data)
            navigate("/travels")
        } catch (error) {
            console.error(error)
        }
    }

    // validation rules
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

    const styleValidations = "text-xs italic text-red-400 font-semibold leading-tigth"

    // --> condicional rendering
    if (loading) return <LoadingCard />
    if (error) return <ErrorCard />

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full min-h-screen flex flex-col items-center">

            {/* title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center sm:max-w-2xl max-w-lg leading-snug mb-10">
                Start your next chapter add a -- destination.
            </h3>

            {/* create form */}
            <form onSubmit={handleSubmit(handleCreate)} className='w-full max-w-xl flex flex-col gap-3'>

                {/* destination */}
                <input
                    id='destination'
                    type="text"
                    placeholder="Your destination here"
                    {...register('destination', destinationRules)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base placeholder-gray-600 
                    focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.destination && <p className={styleValidations}>{errors.destination.message}</p>}

                {/* country */}
                <input
                    id='country'
                    type="text"
                    placeholder="Country destination"
                    {...register('country', countryRules)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base placeholder-gray-600 
                    focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.country && <p className={styleValidations}>{errors.country.message}</p>}

                {/* description */}
                <textarea
                    id='description'
                    type="text"
                    placeholder="Add a short descripction about your trip or destination"
                    {...register('description', descriptionRules)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base placeholder-gray-600 
                    focus:outline-none focus:ring-2 focus:ring-black min-h-20 resize-none"
                ></textarea>
                {errors.description && <p className={styleValidations}>{errors.description.message}</p>}

                {/* url image */}
                <input
                    id="urlImage"
                    type="text"
                    placeholder="puth your url image here"
                    {...register('urlImage', urlImageRules)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base placeholder-gray-600 
                    focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.urlImage && <p className={styleValidations}>{errors.urlImage.message}</p>}

                {/* call to action */}
                <button
                    className='w-full bg-black rounded-full px-3 py-3 text-white font-medium mt-10
                    transition-transform duration-300 ease-out hover:-translate-y-2'>
                    let's travel
                </button>

            </form>
            <GoBackButton />
        </motion.div>
    )
}

