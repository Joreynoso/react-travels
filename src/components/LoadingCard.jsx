export default function LoadingCard() {

    return (
        <>
            <div className='w-full text-center flex justify-center gap-3 pt-10'>
                <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
                <h2 className='font-medium text-xl sm:text-2xl'>Loading info...</h2>
            </div>
        </>
    )
}