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

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

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
                <div className='w-full'>
                    <input
                        {...register("ownerName", {
                            required: "required",
                        })}
                        className={`px-2 focus:outline-none focus:ring-2 ${errors.ownerName ? "focus:ring-red-500" : "focus:ring-gray-500"} border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full`}
                        type="text"
                        placeholder="Owner Name"
                    />
                    {errors.ownerName && <span className='text-red-500'>{errors.ownerName.message}</span>}
                </div>
                <div className='w-full'>
                    <input
                        {...register("shopName", {
                            required: "required",
                        })}
                        className={`px-2 focus:outline-none focus:ring-2 ${errors.shopName ? "focus:ring-red-500" : "focus:ring-gray-500"} border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full`}
                        type="text"
                        placeholder="Shop Name"
                    />
                    {errors.shopName && <span className='text-red-500'>{errors.shopName.message}</span>}
                </div>
                <div className='w-full'>
                    <input
                        {...register("shopEmail", {
                            required: "required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })} name="email"
                        className={`px-2 focus:outline-none focus:ring-2 ${errors.shopEmail ? "focus:ring-red-500" : "focus:ring-gray-500"} border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full`}
                        type="email"
                        placeholder="Shop Email"
                    />
                    {errors.shopEmail && <span className='text-red-500'>{errors.shopEmail.message}</span>}
                </div>
                <div className='w-full'>
                    <input
                        {...register("password", {
                            required: "required",
                            minLength: {
                                value: 6,
                                message: "password must be 6 characters"
                            }
                        })}
                        className={`px-2 focus:outline-none focus:ring-2 ${errors.password ? "focus:ring-red-500" : "focus:ring-gray-500"} border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full`}
                        type="password"
                        placeholder="Password"
                    />
                    {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                </div>
                <div className="w-full">
                    <input
                        {...register("phoneNumber", {
                            required: "required",
                            pattern: {
                                value: /^-?\d+\.?\d*$/,
                                message: "invalid phone number"
                            }
                        })}
                        className={`px-2 focus:outline-none focus:ring-2 ${errors.phoneNumber ? "focus:ring-red-500" : "focus:ring-gray-500"} border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full`}
                        type="text"
                        placeholder="Phone Number"
                    />
                    {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber.message}</span>}
                </div>
                <div className="w-full">
                    <input
                        {...register("shopAddress", {
                            required: "required",
                        })}
                        className={`px-2 focus:outline-none focus:ring-2 ${errors.shopAddress ? "focus:ring-red-500" : "focus:ring-gray-500"} border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full`}
                        type="text"
                        placeholder="Full Address"
                    />
                    {errors.shopAddress && <span className='text-red-500'>{errors.shopAddress.message}</span>}
                </div>
                <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-focus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
                    {loading ? <SmallSpinner /> : "Sign Up"}
                </button>
            </form>
        </>
    )
}

export default MerchantForm