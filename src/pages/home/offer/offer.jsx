import React from 'react'
import image1 from '../../../Assets/Images/worldwide.jpeg'
import image2 from '../../../Assets/Images/cardboard.jpeg'
import image3 from '../../../Assets/Images/mobiletruck.jpeg'


const Offer = () => {
    return (

        <div class="py-8 mb-10">
            <div class="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
                <div
                    class="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16"
                >
                    <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                        <h1 class="text-4xl font-bold text-gray-800 md:text-5xl capitalize">
                            Order now and benefit up to <span class="text-blue-500">30% off</span>
                        </h1>
                        <p class="text-lg text-gray-600 ">
                            Users should be able to track the status of their payments within the website.
                        </p>
                        <div class="flex flex-wrap gap-6">
                            <a
                                href="#"
                                class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                                <span class="relative text-base font-semibold text-white"
                                >Order now</span
                                >
                            </a>
                            <a
                                href="#"
                                class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-800 hover:before:border-none hover:before:bg-blue-500 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max text-gray-800 hover:text-white"
                            >
                                <span
                                    class="relative text-base font-semibold text-primary"
                                >More about</span
                                >
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                        <div class="col-span-2 row-span-4">
                            <img
                                src={image1}
                                class="rounded-full"
                                width="640"
                                height="960"
                                alt="shoes"
                                loading="lazy"
                            />
                        </div>
                        <div class="col-span-2 row-span-2">
                            <img
                                src={image2}
                                class="h-full w-full rounded-xl object-cover object-top"
                                width="640"
                                height="640"
                                alt="shoe"
                                loading="lazy"
                            />
                        </div>
                        <div class="col-span-3 row-span-3">
                            <img
                                src={image3}
                                class="h-full w-full rounded-xl object-cover object-top"
                                width="640"
                                height="427"
                                alt="shoes"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Offer