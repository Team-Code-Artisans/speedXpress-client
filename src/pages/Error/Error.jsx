import React from 'react'
import ErrorPng from '../../Assets/Images/Error.png'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className="bg-white">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-lg font-medium text-blue-500">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-6xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 text-lg">Sorry, the page you are looking for doesn't exist.</p>

                    <div className="flex items-center mt-6 gap-x-3">

                        <Link to={'/'} className="w-1/2 px-5 py-2 text-2xl tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600">
                            Take me home
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                    <img className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover " src={ErrorPng} alt="" loading='lazy' />
                </div>
            </div>
        </section>
    )
}

export default Error