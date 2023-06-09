import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import { setAuthToken } from '../../API Operations/Auth'
import { saveUser } from '../../API Operations/manageUsers'
import { AuthContext } from '../../contexts/AuthProvider'
import SmallSpinner from '../../components/smallSpinner/SmallSpinner'

const RegularForm = () => {

    const { registerUser, loading, setLoading } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

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
                    account_type: 'regular'
                }
                reset()
                setLoading(false)
                setAuthToken(user);
                saveUser(userData);
                toast.success("User Register Successfully")
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)
                console.log(error.message)
            })
    }

    return (
        <form onSubmit={handleSubmit(handleRegister)} className="mt-6 flex flex-col justify-start items-start w-full space-y-8">
            <div className='w-full'>
                <input
                    {...register("name", {
                        required: "required",
                    })}
                    className={`px-2 focus:outline-none focus:ring-2 ${errors.name ? "focus:ring-red-500" : "focus:ring-gray-500"} border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full`}
                    type="text"
                    placeholder="Full Name"
                />
                {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
            </div>
            <div className='w-full'>
                <input
                    {...register("email", {
                        required: "required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                    className={`px-2 focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-500" : "focus:ring-gray-500"} border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full`}
                    type="email"
                    placeholder="Your Email"
                />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
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
                    })}
                    className={`px-2 focus:outline-none focus:ring-2 ${errors.phoneNumber ? "focus:ring-red-500" : "focus:ring-gray-500"} border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full`}
                    type="text"
                    placeholder="Phone Number"
                />
                {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber.message}</span>}
            </div>
            <div className="w-full">
                <input
                    {...register("address", {
                        required: "required",
                    })}
                    className={`px-2 focus:outline-none focus:ring-2 ${errors.address ? "focus:ring-red-500" : "focus:ring-gray-500"} border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full`}
                    type="text"
                    placeholder="Full Address"
                />
                {errors.address && <span className='text-red-500'>{errors.address.message}</span>}
            </div>
            <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-focus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
                {loading ? <SmallSpinner /> : "Sign Up"}
            </button>
        </form>
    )
}

export default RegularForm