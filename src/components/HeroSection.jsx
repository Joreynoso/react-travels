// --> imports
import Navbar from "./Navbar"
import CircleDecoration from "./CircleDecoration"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

export default function HeroSection() {

    return (
        <>
            {/* hero section */}
            <div className="w-full flex-1 grid grid-cols-1 grid-rows-4 gap-6 xl:grid-cols-10 xl:grid-rows-6">

                {/* Left text section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative xl:col-span-6 xl:row-span-4 flex flex-col justify-between">
                    <Navbar />

                    <section className="flex flex-col">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 leading-tight">
                            Plan, capture, and <br /> share your journeys <br /> — all in one place.
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg xl:text-xl font-light max-w-xl leading-relaxed">
                            From spontaneous weekend escapes to once-in-a-lifetime adventures, effortlessly organize your trips, upload breathtaking photos, and keep your travel memories alive forever.
                        </p>
                    </section>
                </motion.div>

                {/* big image section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                        backgroundImage: 'url(/images/3.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className="bg-neutral-400 rounded-xl p-6 xl:col-span-4 xl:row-span-6 flex items-end text-center">
                    <div className="bg-white w-full rounded-xl h-full xl:h-72 flex flex-col justify-end items-center p-12">
                        <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold mb-8 leading-snug">
                            Ready to create your <br />
                            unforgettable travel story?
                        </h3>
                        <Link
                            to={"travels"}
                            className="w-56 bg-black p-4 rounded-full text-white font-semibold
                                    transition-transform duration-300 ease-out hover:-translate-y-2
                                    hover: 2">
                            Begins the adventure!
                        </Link>
                    </div>
                </motion.div>

                {/* little section 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                        backgroundImage: 'url(/images/2.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className="bg-neutral-400 relative rounded-xl p-6 xl:col-span-3 xl:row-span-2 flex items-end">
                    <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-white leading-relaxed">
                        Organize, Upload, <br />
                        and Relive Your <br />
                        Travel Memories
                    </h2>

                    <CircleDecoration />
                </motion.div>

                {/* little section 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                        backgroundImage: 'url(/images/1.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className="bg-neutral-400 rounded-xl p-6 xl:col-span-3 xl:row-span-2 flex items-end relative">
                    <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-white leading-relaxed">
                        Find New <br />
                        Journeys and <br />
                        Share Your Stories
                    </h2>

                    <CircleDecoration />
                </motion.div>

            </div>
        </>
    )
}