
export const PendingDeliveries = () => {
    return (
        <div className="bg-white p-8 rounded-md w-full">
            <div className=" lg:flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-600 font-semibold text-3xl">All  Pending <span className="text-orange-600">Delivery</span></h2>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex bg-gray-100 items-center p-2 rounded-md border w-60 lg:w-96">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="bg-gray-100 outline-none ml-3 block " type="text" name="" id="" placeholder="search by parcel id ..." />
                    </div>
                    <div className="lg:ml-5 ml-5 space-x-8">
                        <button className="bg-orange-600 hover:bg-orange-800 active:bg-gray-800 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer text-xs lg:text-base">search</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal overflow-scroll">

                            {/* table header  */}

                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        customer info
                                    </th>

                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        From
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        to
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Parcel info
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        reciever email
                                    </th>

                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        fees
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        status
                                    </th>
                                </tr>
                            </thead>


                            {/* table body  */}
                            <tbody>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(el => (
                                    <tr key={el}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                12-11-28
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Ashikur Rahman
                                                    </p>
                                                    <p className="text-gray-900 whitespace-no-wrap">+880183727</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                dhaka
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Dhaka</p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap text-md">
                                                        id:
                                                        <span className="text-rose-500 pl-1">d52fswdkd</span>
                                                    </p>
                                                    <p className="text-gray-900 whitespace-no-wrap">200kg</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="font-semibold whitespace-no-wrap">
                                                ashik@gmail.com
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b text-orange-500 border-gray-200 bg-white text-sm">
                                            <p className="font-semibold whitespace-no-wrap">
                                                4000
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-slate-50 whitespace-no-wrap bg-orange-400 py-1 rounded-full text-center ">
                                                pending
                                            </p>
                                        </td>
                                    </tr>
                                ))


                                }
                            </tbody>
                        </table>

                        <div
                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 10 of 50 orders
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-orange-600 bg-gray-800 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button
                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-orange-600 bg-gray-800 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
