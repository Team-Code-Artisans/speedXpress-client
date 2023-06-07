import React from 'react'

const MerchantHeader = () => {
    return (
        <div className='my-10'>
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Welcome, Shop Name</h1>

            <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
            </div>
        </div>
    )
}

export default MerchantHeader