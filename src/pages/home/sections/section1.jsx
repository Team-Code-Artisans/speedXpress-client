import React from 'react'
import logistics from '../../../Assets/logistics-bro.png'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from 'aos';

const Section1 = () => {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 })
    // }, []);
    return (
        <section className="">
            <div className="max-w-screen-xl flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div
                    // data-aos="fade-right"
                    className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={logistics} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div
                    // data-aos="fade-left"
                    className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold sm:text-6xl">Streamline logistics processes
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        The website should aim to streamline logistics processes, such as inventory management, order tracking, and delivery scheduling.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 bg-orange-500 text-lg font-semibold rounded">Suspendisse</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded bg-orange-200">Malesuada</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1