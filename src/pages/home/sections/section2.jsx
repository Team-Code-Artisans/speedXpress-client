import React from 'react'
import image from '../../../Assets/Images/section2.png'
import { Link } from 'react-router-dom'

const section2 = () => {
    return (
        <section className="mb-10">
            <div className="max-w-screen-xl flex flex-col-reverse justify-center py-8 mx-auto lg:flex-row lg:justify-between">
                <div
                    className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="md:text-5xl text-3xl font-bold sm:text-6xl capitalize">Customers can place <span className='text-blue-500'>Orders</span> online
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Customers can place orders online, streamlining the order process and reducing the need for manual intervention.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to={'/login'} rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-white">Get Started</Link>
                        <Link to={'/register'} rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border rounded bg-blue-400 text-white">Order Now</Link>
                    </div>
                </div>
                <div
                    className="flex items-center justify-center md:w-1/2 px-10">
                    <img src={image} alt="image" loading='lazy' className="md:w-[80%] w-full" />
                </div>
            </div>
        </section>
    )
}

export default section2