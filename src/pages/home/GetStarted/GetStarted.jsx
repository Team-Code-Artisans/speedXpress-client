import React from "react";
import delivery from '../../../Assets/Images/delivery.jpeg'
import { Link } from "react-router-dom";

const GetStarted = () => {
    return (
        <div className="container px-6 py-8 mx-auto text-center">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Precision Logistics for Timely Deliveries and Cost Savings</h1>
                <Link to={'/login'}>
                    <button className="px-6 py-4 mt-6 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none text-xl">
                        Get Started Now
                    </button>
                </Link>
            </div>

            <div className="flex justify-center">
                <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src={delivery} loading="lazy" />
            </div>
        </div>
    );
};

export default GetStarted;
