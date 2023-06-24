import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPendingActions } from "react-icons/md";
import { BsHouseCheck } from "react-icons/bs";

const TrackingModal = ({ isOpen, setIsOpen, trackProduct }) => {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                {
                                    !trackProduct ?
                                        <Dialog.Title
                                            as="h1"
                                            className="text-xl font-medium leading-6 text-gray-800 text-center"
                                        >
                                            Please Provide Valid ID
                                        </Dialog.Title>
                                        :
                                        <section>
                                            <div className="p-4">
                                                <div className="h-full bg-gray-100 bg-opacity-40 px-8 py-12 rounded-xl text-center">
                                                    <div className="flex justify-between text-lg font-medium pb-8">
                                                        <h2 className="">Parcel ID: {trackProduct?._id}</h2>
                                                        <h2 className="">Order Time: {trackProduct?.date} | {trackProduct?.time}</h2>
                                                    </div>
                                                    <hr />
                                                    <div className="pt-8">
                                                        <div>
                                                            {/* progress bar here */}

                                                            {/* just order not yet paid .... */}
                                                            {
                                                                trackProduct?.status == "pending" &&
                                                                <div className="overflow-hidden rounded-full bg-zinc-500">
                                                                    <div className="h-3 w-[13%] rounded-full bg-blue-400"></div>
                                                                </div>
                                                            }

                                                            {/* accepted so this order is now in ware house */}
                                                            {
                                                                trackProduct?.status == "accepted" &&
                                                                <div className="overflow-hidden rounded-full bg-zinc-500">
                                                                    <div className="h-3 w-1/4 rounded-full bg-blue-400"></div>
                                                                </div>
                                                            }
                                                            {/* accepted so this order is now on the way  */}
                                                            {
                                                                trackProduct?.status == "in-transit" &&
                                                                <div className="overflow-hidden rounded-full bg-zinc-500">
                                                                    <div className="h-3 w-1/2 rounded-full bg-blue-400"></div>
                                                                </div>
                                                            }

                                                            {/* this product is now delivered  */}
                                                            {
                                                                trackProduct?.status == "complete" &&
                                                                <div className="overflow-hidden rounded-full bg-zinc-500">
                                                                    <div className="h-3 w-3/4 rounded-full bg-blue-400"></div>
                                                                </div>
                                                            }

                                                            {/* this product into delivery problem so its return  */}
                                                            {
                                                                trackProduct?.status == "return" &&
                                                                <div className="overflow-hidden rounded-full bg-zinc-500">
                                                                    <div className="h-3 w-full rounded-full bg-blue-400"></div>
                                                                </div>
                                                            }
                                                            {
                                                                trackProduct == null &&
                                                                <div className=" h-2 overflow-hidden rounded-full bg-stone-200">
                                                                </div>
                                                            }

                                                            {/* list of status here */}
                                                            <ol className="mt-4 grid grid-cols-5 text-sm font-medium text-gray-600">
                                                                <li className={`flex items-center justify-center ${trackProduct?.status == "pending" && "text-blue-500"} sm:gap-1.5`}>
                                                                    <span className="hidden sm:inline"> Pending </span>
                                                                    <MdPendingActions className="text-xl" />
                                                                </li>

                                                                <li className={`flex items-center justify-center ${trackProduct?.status == "accepted" && "text-blue-500"} sm:gap-1.5`}>
                                                                    <span className="hidden sm:inline"> In warehouse </span>
                                                                    <BsHouseCheck className="text-xl" />
                                                                </li>
                                                                <li className={`flex items-center justify-center ${trackProduct?.status == "in-transit" && "text-blue-500"} sm:gap-1.5`}>
                                                                    <span className="hidden sm:inline"> On The Way </span>
                                                                    <HiOutlineLocationMarker className="text-xl" />
                                                                </li>

                                                                <li className={`flex items-center justify-center ${trackProduct?.status == "complete" && "text-blue-500"} sm:gap-1.5`}>
                                                                    <span className="hidden sm:inline"> Delivered </span>
                                                                    <AiOutlineDeliveredProcedure className="text-xl" />
                                                                </li>

                                                                <li className={`flex items-center justify-center ${trackProduct?.status == "return" && "text-blue-500"} sm:gap-1.5`}>
                                                                    <span className="hidden sm:inline"> Return </span>
                                                                    <AiOutlineDeliveredProcedure className="text-xl" />
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </div>

                                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-black my-10">
                                                        Parcel Details
                                                    </h1>
                                                    <div className="flex justify-center font-medium mx-auto">
                                                        <div className="flex flex-col justify-center mx-auto text-xl">
                                                            <div className="flex flex-wrap capitalize">
                                                                <p className="mb-2 mr-3 text-blue-500">Name:</p>
                                                                <p>{trackProduct?.customerInfo?.name}</p>
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                <p className="mb-2 mr-3 text-blue-500 capitalize">Location:</p>
                                                                <p>{trackProduct?.customerInfo?.district}</p>
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                <p className="mb-2 mr-3 text-blue-500">Payment:</p>
                                                                <p>{trackProduct?.TotalchargeAmount}</p>
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                <p className="mb-2 mr-3 text-blue-500">Paid:</p>
                                                                <p>{trackProduct?.paid ? "PAID" : "UNPAID"}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col justify-center mx-auto text-xl">
                                                            <div className="flex flex-wrap">
                                                                <p className="mb-2 mr-3 text-blue-500">Email:</p>
                                                                <p>{trackProduct?.customerInfo?.email}</p>
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                <p className="mb-2 mr-3 text-blue-500">Phone Number:</p>
                                                                <p>{trackProduct?.customerInfo?.number}</p>
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                <p className="mb-2  mr-3 text-blue-500">Delivered By: </p>
                                                                <p>Employee</p>
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                <p className="mb-2 mr-3 text-blue-500">Sender Email: </p>
                                                                <p>{trackProduct?.senderEmail}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                }
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default TrackingModal