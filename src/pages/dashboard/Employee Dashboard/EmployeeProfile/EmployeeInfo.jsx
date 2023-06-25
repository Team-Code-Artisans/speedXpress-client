import React from 'react'
import EmployeeModal from './EmployeeModal';

const EmployeeInfo = ({ userData, fetchUser }) => {

    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="mt-2 mb-8 w-full flex justify-between">
                    <h4 className="px-2 text-2xl font-bold text-navy-700 dark:text-white">
                        General Information
                    </h4>
                    <EmployeeModal userData={userData} fetchUser={fetchUser} />
                </div>

                <div className="grid md:grid-cols-2 gap-4 px-2 w-full">
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600"> Name</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            {userData?.name}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            {userData?.email}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Phone Number</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            {userData?.phoneNumber}
                        </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600"> Address</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            {userData?.address}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Account</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white uppercase">
                            {userData?.account_type}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeInfo