import React from "react";
import logistic from '../../../Assets/Images/logistics.mp4'
import Navbar1 from "../../shared/navbar1/navbar1";

const Hero3 = () => {

    return (
        <div className="pb-9 md:pb-12 lg:pb-24">
            <div className="relative">
                <div className="hidden md:block absolute w-full">
                    <Navbar1 />
                </div>
                <video src={logistic} autoPlay loop className='w-full object-cover h-screen' />

                <div className="absolute z-10 md:top-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-800 sm:w-[55%]">Delivering Excellence, On Time, Every Time</h1>
                </div>
                <div class="w-full md:max-w-sm mt-6 bg-gray-800 md:rounded-md absolute md:bottom-10 bottom-0 md:right-10">
                    <form class="flex flex-col md:flex-row">
                        <input type="email" placeholder="Enter Tracking Number" class="flex-1 px-4 py-2 m-1 text-white text-center md:text-left placeholder-gray-400 placeholder:text-center md:placeholder:text-left bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0" />

                        <button type="button" class="h-full px-4 py-4 text-white transition-colors duration-300 transform bg-blue-500 hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                            Track Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero3;
