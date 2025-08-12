import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    // handle open
    function handleShown() {
        setIsOpen(prev => !prev)
    }

    // fix bug to prevent keep open when the screen size changes
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 640) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // svg icons
    const closeSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )

    const openSvg = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
    )


    return (
        <>
            {/* Navbar */}
            <nav className="flex flex-wrap justify-between items-center mb-10 md:mb-16">
                <Link
                    to={"/"}
                    className="border border-black rounded-full px-6 py-2 text-base font-semibold
                     transition-transform duration-300 ease-out hover:-translate-y-2"
                >
                    Travel
                </Link>

                <ul className="hidden sm:flex flex-wrap text-base font-medium tracking-wide gap-6 px-6 py-2 box-border bg-black rounded-full text-white">
                    <NavLink
                        to="about"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-100 font-bold" : ""
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="travels"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-100 font-bold" : ""
                            }`
                        }
                    >
                        Travels
                    </NavLink>
                    <NavLink
                        to="login"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-100 font-bold" : ""
                            }`
                        }
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="register"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-100 font-bold" : ""
                            }`
                        }
                    >
                        Register
                    </NavLink>
                </ul>

                <button
                    onClick={handleShown}
                    className="cursor-pointer block sm:hidden h-10 w-10 aspect-square rounded-md p-1 hover:bg-neutral-100 transition"
                >
                    {!isOpen ? openSvg : closeSvg}
                </button>
            </nav>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="sm:hidden w-full bg-black text-white shadow-md flex flex-col px-6 py-4 gap-4 rounded-lg">
                    <NavLink
                        to="about"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-100 font-bold" : ""
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="travels"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-100 font-bold" : ""
                            }`
                        }
                    >
                        Travels
                    </NavLink>
                    <NavLink
                        to="login"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-100 font-bold" : ""
                            }`
                        }
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="register"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-100 font-bold" : ""
                            }`
                        }
                    >
                        Register
                    </NavLink>
                </motion.div>
            )}
        </>
    )
}
