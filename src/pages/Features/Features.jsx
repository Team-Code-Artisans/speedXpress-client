import React from 'react'
import Logistics from '../../Assets/Logistics-amico.png'

const Features = () => {
    return (
        <div className='px-10 py-20'>
            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome Features</h1>

                    <div class="mt-2">
                        <span class="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
                        <span class="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
                        <span class="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
                    </div>

                    <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                        <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                            <div class="space-y-3">
                                <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </span>

                                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Shipment Tracking</h1>

                                <p class="text-gray-500 dark:text-gray-300">
                                    Users can track the status of their shipments in real-time, enabling them to monitor the progress and estimated delivery time.
                                </p>
                            </div>

                            <div class="space-y-3">
                                <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </span>

                                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Online Order Placement</h1>

                                <p class="text-gray-500 dark:text-gray-300">
                                    Customers can place orders online, streamlining the order process and reducing the need for manual intervention.
                                </p>
                            </div>

                            <div class="space-y-3">
                                <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                    </svg>
                                </span>

                                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Inventory Management</h1>

                                <p class="text-gray-500 dark:text-gray-300">
                                    The website allows users to manage and track inventory levels, ensuring optimal stock levels and minimizing stockouts.
                                </p>
                            </div>

                            <div class="space-y-3">
                                <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </span>

                                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Warehouse Management</h1>

                                <p class="text-gray-500 dark:text-gray-300">
                                    Users can efficiently manage warehouse operations, including inventory storage, picking, packing, and shipping.
                                </p>
                            </div>
                        </div>

                        <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                            <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={Logistics} alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                <div class="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
                    <span class="inline-block text-orange-500 dark:text-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Route Planning</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        The website offers tools for optimizing transportation routes, considering factors such as distance, traffic, and delivery time.
                    </p>

                    <a href="#" class="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>

                <div class="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
                    <span class="inline-block text-orange-500 dark:text-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Supplier and Vendor Management</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        Users can manage relationships with suppliers and vendors, including order placement, tracking, and collaboration.
                    </p>

                    <a href="#" class="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>

                <div class="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
                    <span class="inline-block text-orange-500 dark:text-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Reporting and Analytics</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        The website provides data analysis and reporting capabilities, offering insights into key performance indicators, trends, and areas for improvement.
                    </p>

                    <a href="#" class="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
                <div class="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
                    <span class="inline-block text-orange-500 dark:text-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Document Management</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        Users can store and access important logistics documents such as invoices, bills of lading, and customs paperwork.
                    </p>

                    <a href="#" class="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
                <div class="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
                    <span class="inline-block text-orange-500 dark:text-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Integration with Carriers and Third-Party Systems</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        The website integrates with various carriers and third-party systems, enabling seamless data exchange and enhancing operational efficiency.
                    </p>

                    <a href="#" class="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
                <div class="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
                    <span class="inline-block text-orange-500 dark:text-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Customer Support and Communication</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        The website provides channels for customer support, such as live chat or ticketing systems, to address inquiries, resolve issues, and provide updates.
                    </p>

                    <a href="#" class="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>

                <div class="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
                    <span class="inline-block text-orange-500 dark:text-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Automated Notifications</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        Users receive automated notifications and updates regarding shipment status, order confirmations, and delivery alerts.
                    </p>

                    <a href="#" class="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>

                <div class="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
                    <span class="inline-block text-orange-500 dark:text-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Returns and Reverse Logistics</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        The website facilitates the management of returns and reverse logistics processes, including return authorizations, tracking, and refunds.
                    </p>

                    <a href="#" class="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>

                <div class="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
                    <span class="inline-block text-orange-500 dark:text-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Security and Data Protection</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        Logistics websites prioritize the security of user data and employ measures such as encryption, secure authentication, and data backup to ensure the protection of sensitive information.
                    </p>

                    <a href="#" class="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Features