import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import { setAuthToken } from '../../API Operations/Auth'
import { saveUser } from '../../API Operations/manageUsers'
import { AuthContext } from '../../contexts/AuthProvider'

const BasicUserForm = () => {

    const { registerUser } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    const { register, reset, handleSubmit } = useForm()

    const handleRegister = (data) => {
        const { name, email, phoneNumber, address, password } = data
        registerUser(email, password, name, phoneNumber)
            .then(result => {
                const user = result?.user;

                const userData = {
                    email,
                    name,
                    phoneNumber,
                    address,
                    account_type: 'basicUser'
                }
                setAuthToken(user);
                saveUser(userData);
                toast.success("User Register Successfully")
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleRegister)} className="mt-6 flex flex-col justify-start items-start w-full space-y-8 ">
                <input
                    {...register("name")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text"
                    placeholder="Full Name"
                    required
                />
                <input
                    {...register("email")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="email"
                    placeholder="Your Email"
                    required
                />
                <input
                    {...register("password")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="password"
                    placeholder="Password"
                    required
                />
                <input
                    {...register("phoneNumber")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text"
                    placeholder="Phone Number"
                    required
                />
                <input
                    {...register("address")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text"
                    placeholder="Full Address"
                    required
                />
                <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
                    Sign Up
                </button>
            </form>
        </>
    )
}

export default BasicUserForm