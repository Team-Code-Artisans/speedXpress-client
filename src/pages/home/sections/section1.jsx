import React from 'react'
import logistics from '../../../Assets/logistics-bro.png'

const Section1 = () => {
    return (
        <section className="mb-10">
            <div className="max-w-screen-xl flex flex-col justify-center py-8 mx-auto lg:flex-row lg:justify-between">
                <div
                    className="flex items-center justify-center md:w-1/2 px-10">
                    <img src={logistics} alt="" className="w-full" />
                </div>
                <div
                    className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold sm:text-6xl">Streamline logistics processes
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        The website should aim to streamline logistics processes, such as inventory management, order tracking, and delivery scheduling.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 bg-blue-500 text-lg font-semibold rounded">Suspendisse</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded bg-blue-200">Malesuada</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1