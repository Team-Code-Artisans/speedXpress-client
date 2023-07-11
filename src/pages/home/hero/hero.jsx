
import logistic from '../../../Assets/Images/logistics.mp4'
import Navbar1 from "../../shared/navbar1/navbar1";

const Hero3 = () => {
    return (
        <div className="mx-auto pb-9 md:pb-12 lg:pb-24">
            <div className="relative">
                <div className="hidden md:block absolute w-full">
                    <Navbar1 />
                </div>
                <video src={logistic} autoPlay loop muted className='w-full object-cover h-screen' />

                <div className="absolute z-10 md:top-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-800 sm:w-[55%]">Delivering Excellence, On Time, Every Time</h1>
                    <p className="text-lg leading-normal text-gray-800 mt-4 sm:mt-5 sm:w-5/12">Let our experienced logistics experts guide you through the complexities of the global marketplace, ensuring your shipments reach their destinations smoothly.</p>
                </div>
                <button className="absolute bottom-0 sm:hidden bg-gray-800 py-4 text-lg font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
            </div>
            <div className="w-full max-w-sm mt-6 bg-transparent border border-blue-400 rounded-md focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 absolute bottom-10 right-10">
                <form className="flex flex-col md:flex-row">
                    <input type="email" placeholder="Enter Tracking Number" className="flex-1 h-10 px-4 py-2 m-1 text-gray-800 placeholder-gray-800 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0" />

                    <button type="button" className="h-full px-4 py-4 text-white transition-colors duration-300 transform bg-blue-500 hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                        Track Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Hero3;
