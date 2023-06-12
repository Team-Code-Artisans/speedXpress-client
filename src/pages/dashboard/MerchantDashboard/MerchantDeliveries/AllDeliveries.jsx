import React from 'react'
import { AiOutlineCopy } from 'react-icons/ai'

const AllDeliveries = ({ allParcels }) => {

    const currentDate = new Date();
    const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

    const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
    const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

    console.log(formattedDate); // Output: 06/12/2023
    console.log(formattedTime); // Output: 12:34 PM

    return (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal overflow-scroll">

                    {/* table header  */}

                    <thead>
                        <tr>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Date & Time
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Invoice ID
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Customer Info
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Parcel Info
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Customer Address
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Payment Info
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Shop Info
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Status
                            </th>
                        </tr>
                    </thead>

                    {/* table body  */}

                    <tbody className='divide-y divide-gray-200'>
                        {allParcels.map(parcel => {
                            const { TotalchargeAmount, customerInfo, deliveryFee, senderEmail, weight, _id } = parcel;
                            const { address, customerOwnerEmail, customerOwnerName, distrcitName, division, email, name, number } = customerInfo;
                            console.log(customerInfo)
                            return (
                                <tr key={_id} className='even:bg-gray-50'>
                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {formattedDate} <br /> {formattedTime}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <div className="flex items-center">
                                            <div>
                                                <p className="text-gray-900 whitespace-no-wrap text-md flex items-center gap-2 ">
                                                    <span className="text-rose-500 pl-1">{_id.slice(0, 6)}</span>
                                                    <AiOutlineCopy />
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <div className="flex items-center">
                                            <div>
                                                <p className="text-gray-900 whitespace-no-wrap">{name}</p>
                                                <p className="text-gray-900 whitespace-no-wrap">{number}</p>
                                                <p className="text-gray-900 whitespace-no-wrap">{email}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Weight: {weight}
                                            <br />
                                            Quantity: { }
                                        </p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {division}, {distrcitName} <br /> {address}
                                        </p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">Delivery Fee Tk. {deliveryFee} <br /> Total Charge Tk. {TotalchargeAmount} </p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {customerOwnerName} <br /> {customerOwnerEmail}
                                        </p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-slate-50 whitespace-no-wrap bg-emerald-400 py-1 rounded-full text-center ">
                                            Completed
                                        </p>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <div className="px-5 py-5  border-t flex flex-col xs:flex-row items-center xs:justify-between">
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
    )
}

export default AllDeliveries