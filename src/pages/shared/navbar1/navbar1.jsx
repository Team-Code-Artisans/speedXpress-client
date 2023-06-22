import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useState } from "react";

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full z-10">
            <div className="container px-8 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold uppercase text-gray-800">
                        Speed <span className="text-blue-500">Xpress</span>
                    </h1>

                    {/* <!-- Mobile menu button --> */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu">
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 8h16M4 16h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div
                    className={`${isOpen
                        ? "translate-x-0 opacity-100"
                        : "opacity-0 -translate-x-full}"
                        } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                    <div className="flex flex-col md:flex-row md:mx-6 md:gap-8">
                        <a
                            className={`my-2 ${isOpen
                                ? "text-gray-800 hover:text-blue-600"
                                : "text-gray-800 font-semibold before:bg-blue-500"
                                } before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative text-lg`}
                            href="#">
                            Home
                        </a>
                        <a
                            className={`my-2 ${isOpen
                                ? "text-gray-800 hover:text-blue-600"
                                : "text-gray-800 font-semibold before:bg-blue-500"
                                } before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative text-lg`}
                            href="#">
                            Shop
                        </a>
                        <a
                            className={`my-2 ${isOpen
                                ? "text-gray-800 hover:text-blue-600"
                                : "text-gray-800 font-semibold before:bg-blue-500"
                                } before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative text-lg`}
                            href="#">
                            Contact
                        </a>
                        <a
                            className={`my-2 ${isOpen
                                ? "text-gray-800 hover:text-blue-600"
                                : "text-gray-800 font-semibold before:bg-blue-500"
                                } before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative text-lg`}
                            href="#">
                            About
                        </a>
                    </div>

                    <div className="flex md:justify-center md:block">
                        <button className="px-6 py-3 w-full bg-blue-400 hover:bg-blue-500 text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                            Sign In
                            <AiOutlineArrowRight
                                size={"1rem"}
                                className="ml-2"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar1;
