import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import { setAuthToken } from '../../API Operations/Auth'
import { saveUser } from '../../API Operations/manageUsers'
import { toast } from 'react-hot-toast'
import SmallSpinner from '../../components/smallSpinner/SmallSpinner'

const MerchantForm = () => {

    const { registerUser, loading, setLoading } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    const { register, reset, handleSubmit } = useForm()

    const handleRegister = (data) => {
        const { ownerName, shopName, shopEmail, phoneNumber, shopAddress, password } = data
        registerUser(shopEmail, password, shopName, phoneNumber)
            .then(result => {
                const user = result?.user;

                const userData = {
                    email: shopEmail,
                    ownerName,
                    phoneNumber,
                    shopName,
                    shopAddress,
                    account_type: 'merchant'
                }
                setLoading(false)
                setAuthToken(user)
                saveUser(userData)
                reset()
                toast.success("Merchant Register Successfully")
                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message)
                setLoading(false)
                console.log(err.message)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleRegister)} className="mt-6 flex flex-col justify-start items-start w-full space-y-8 ">
                <input
                    {...register("ownerName")}
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
                    {...register("shopAddress")}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text"
                    placeholder="Shop Address"
                    required
                />
                <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-focus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
                    {loading ? <SmallSpinner /> : "Sign Up"}
                </button>
            </form>
        </>
    )
}

export default MerchantForm