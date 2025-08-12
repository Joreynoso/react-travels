// --> import react router dom
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full min-h-screen flex flex-col justify-center items-center">
                <h2 className="font-medium text-7xl sm:text-[300px]">404</h2>
                <p className="font-normal text-lg sm:text-xl mb-4">the page doesn't exist.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="w-40 bg-black p-4 rounded-full text-white font-semibold
                                    transition-transform duration-300 ease-out hover:-translate-y-2
                                    hover: 2">go back</button>
            </motion.div>
        </>
    )
}