import React from 'react'
import { useForm } from 'react-hook-form'

const MerchantForm = () => {

    const { register, reset, handleSubmit } = useForm()

    const handleRegister = (data) => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleRegister)} className="mt-6 flex flex-col justify-start items-start w-full space-y-8 ">
                <input
                    {...register("name")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text"
                    placeholder="Owner Name"
                    required
                />
                <input
                    {...register("shopName")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text"
                    placeholder="Shop Name"
                    required
                />
                <input
                    {...register("shopEmail")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="email"
                    placeholder="Shop Email"
                    required
                />
                <input
                    {...register("number")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    placeholder="Phone Number"
                    required
                />
                <input
                    {...register("address")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text"
                    placeholder="Shop Address"
                    required
                />
                <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
                    Sign Up
                </button>
            </form>
        </>
    )
}

export default MerchantForm