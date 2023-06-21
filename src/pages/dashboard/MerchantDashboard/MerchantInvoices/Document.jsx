
const Document = ({ componentRef, filterData }) => {


    return (
        <>
            <div ref={componentRef} className="flex flex-col justify-center items-center h-[100vh]">
                <div rer={componentRef} className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 p-3">
                    <div className="mt-2 mb-8 w-full flex justify-between">
                        <h4 className="px-2 pl-4 text-2xl font-bold text-navy-700">
                            Invoice Info
                        </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4 px-2 w-full">
                        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                            <p className="text-sm text-gray-600">Name</p>
                            <p className="text-base font-medium text-navy-700">
                                Here Will Be Info
                            </p>
                        </div>

                        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="text-base font-medium text-navy-700">
                                Here Will Be Info
                            </p>
                        </div>

                        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                            <p className="text-sm text-gray-600">Phone Number</p>
                            <p className="text-base font-medium text-navy-700">
                                Here Will Be Info
                            </p>
                        </div>

                        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                            <p className="text-sm text-gray-600">Address</p>
                            <p className="text-base font-medium text-navy-700">
                                Here Will Be Info
                            </p>
                        </div>

                        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                            <p className="text-sm text-gray-600">Pay Total</p>
                            <p className="text-base font-medium text-navy-700 uppercase">
                                Here Will Be Info
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Document