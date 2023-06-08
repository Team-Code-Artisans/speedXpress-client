import React from 'react'

const Announcement = () => {
    return (
        <div
            class="bg-orange-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        >
            <p class="text-center font-medium sm:text-left">
                Announcement or any kind of
                marketing goes here
            </p>

            <a
                class="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-orange-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-orange-500 sm:mt-0"
                href="#"
            >
                Learn More
            </a>
        </div>
    )
}

export default Announcement