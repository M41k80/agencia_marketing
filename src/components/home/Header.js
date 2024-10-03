import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'



function Header() {
    


    return (
        <section className="text-gray-800 home">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none pb-40 sm:text-7xl">Agency for 
            <span> </span>
            <div className='inline-flex' style={{ color: '#05BBEB', fontWeight: 'bold'}}>
            <Typewriter
            
            words={['Dreamers', 'Entrepreneurs', 'Creators', 'You!']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
            </div>
            
            </h1>
            <ul className='flex gap-8 items-center justify-center py-12'>
                <li className='inline-flex border-b-4 border-transparent hover:underline hover:underline-offset-5 transition duration-300 ease-in-out mx-4'>
                    <Link to='/services/1' className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center'>
                        Web
                    </Link>
                   
                </li>
                <li className='inline-flex border-b-2 border-transparent hover:underline hover:underline-offset-4 transition duration-300 ease-in-out mx-4'>
                    <Link to='/services/2' className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center'>
                        Apps
                    </Link>
                   
                </li>
                <li className='inline-flex border-b-2 border-transparent hover:underline hover:underline-offset-4 transition duration-300 ease-in-out mx-4'>
                    <Link to='/services/3' className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center'>
                        Video Games
                    </Link>
                   
                </li>
                <li className='inline-flex border-b-2 border-transparent hover:underline hover:underline-offset-4 transition duration-300 ease-in-out mx-4'>
                    <Link to='/services/4' className='mt-6 text-lg lfont-medium leading-8 text-gray-700 sm:text-center'>
                        Marketing
                    </Link>
                   
                </li>
                <li className='inline-flex border-b-2 border-transparent hover:underline hover:underline-offset-4 transition duration-300 ease-in-out mx-4'>
                    <Link to='/services/4' className='mt-6 text-lg lfont-medium leading-8 text-gray-700 sm:text-center'>
                        Consulting
                    </Link>
                   
                </li>
            </ul>
            {/* <div className="flex flex-wrap justify-center">
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50">Get started</button>
                <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">Learn more</button>
            </div> */}
        </div>
    </section>
    )
}

export default Header;