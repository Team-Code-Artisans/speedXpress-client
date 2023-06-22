import React from 'react'
import ErrorPng from '../../Assets/Images/Error.png'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section class="bg-white ">
            <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div class="wf-ull lg:w-1/2">
                    <p class="text-lg font-medium text-orange-500">404 error</p>
                    <h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-6xl">Page not found</h1>
                    <p class="mt-4 text-gray-500 text-lg">Sorry, the page you are looking for doesn't exist.</p>

                    <div class="flex items-center mt-6 gap-x-3">

                        <Link to={'/'} class="w-1/2 px-5 py-2 text-2xl tracking-wide text-white transition-colors duration-200 bg-orange-500 rounded-lg shrink-0 sm:w-auto hover:bg-orange-600">
                            Take me home
                        </Link>
                    </div>
                </div>

                <div class="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                    <img class=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover " src={ErrorPng} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Error