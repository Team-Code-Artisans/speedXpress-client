import bannerImage from "../../../Assets/Images/Yellow-Truck-PNG-Image.png";
import carMobile from '../../../Assets/car with mobile.jpg'
import delivery from '../../../Assets/Images/tracking-delivery.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    // useEffect(() => {
    //     AOS.init({ duration: 2000 })
    // }, []);

    return (
        <div>
            <div className='bg-[#101920] overflow-x-hidden'>
                <div id="Banner" className="px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-screen-2xl md:px-16 lg:px-8 lg:py-4 ">

                    <h1
                        // data-aos="fade-right"
                        className="px-4 md:px-8 text-4xl md:text-6xl tracking-normal leading-relaxed uppercase font-bold py-8 text-fuchsia-50" >
                        Experience the <span className='text-yellow'> best logistic</span> <br className="hidden md:block" />solution for your need
                    </h1>


                    <div className="md:flex lg:flex justify-between items-center relative md:px-10 md:gap-x-8 lg:px-14">
                        <div
                            // data-aos="fade-right"
                            className="p-2 max-w-full md:max-w-fit mb-6 md:-mt-40">
                            <h5 className='text-lg text-left text-slate-400 mb-6'>We deliver, Track and ship</h5>

                            <div className="p-3.5 bg-[#192732] inline-block rounded-l-lg -mb-2 ">
                                <span className='text-center text-yellow'> Track here</span>
                            </div>
                            <div className="py-5 px-4 bg-[#192732] rounded-lg">
                                <div className="flex flex-col md:flex-row  justify-center gap-4 flex-wrap rounded-lg">
                                    <input type="text" placeholder='Tracking Id' className='border border-slate-500 rounded-lg px-6 py-2.5 bg-transparent text-slate-200 ' />
                                    <Link to={'/order-tracking'} className='text-slate-900 bg-yellow px-8 py-2.5 rounded-lg'>TRACK</Link>
                                </div>
                            </div>

                        </div>

                        <img
                            // data-aos="fade-left"
                            src={bannerImage} alt="truck" className="block max-w-lg md:max-w-xl -mr-[4%] md:-mr-[54%] lg:-mr-[14%] lg:pb-8 xl:max-w-4xl xl:-mr-[30%]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;