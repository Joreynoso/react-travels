// --> imports
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {

    // --> settings
    const location = useLocation()
    const isHome = location.pathname === "/"

    return (
        <>
            <div className="w-full min-h-dvh bg-white px-4 py-4 sm:px-6 flex flex-col box-border mx-auto">
                {/* Main content */}
                {!isHome && <Navbar/>}
                <div className="flex flex-1">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}