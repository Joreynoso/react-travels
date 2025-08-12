// --> imports
import GoBackButton from '../components/GoBackButton'

export default function AboutPage() {

    return (
        <div className="w-full min-h-screen flex flex-col items-center px-4 box-border">

            {/* title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center sm:max-w-2xl max-w-lg leading-snug mb-10">
                Discover new horizons — start your journey today.
            </h3>

            {/* description */}
            <p className="text-center text-base sm:text-lg max-w-xl text-gray-700">
                Travel is your personal space to plan and track the places you dream to explore.
                Capture moments, organize your destinations, and turn your travel dreams into reality.
                Ready to create memories that last forever?
            </p>

            <GoBackButton/>

        </div>

    )
}