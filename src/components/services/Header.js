function Header() {
    


    return (
        <section className="text-gray-800 home pt-40">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none pb-16 sm:text-5xl">
            Software Development Services
            
            </h1>
            <p className='mt-6 text-2xl leading-8 text-gray-600 sm:text-center'>
            Learn how to grow your business with our expert advice.
            </p>
            
            {/* <div className="flex flex-wrap justify-center">
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50">Get started</button>
                <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">Learn more</button>
            </div> */}
        </div>
    </section>
    )
}

export default Header;