import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { saveUser } from '../../../../API Operations/manageUsers'
import { AuthContext } from '../../../../contexts/AuthProvider'
import { Link } from 'react-router-dom'

const AdminUpdate = ({ userData, fetchUser, closeModal }) => {

    const { user } = useContext(AuthContext)

    const { handleSubmit, register, formState: { errors } } = useForm()

    const handleUpdate = (data) => {
        const email = user?.email
        const account_type = userData?.account_type
        const upDatedData = { ...data, email, account_type }
        saveUser(upDatedData)
            .then(result => {
                fetchUser()
                // console.log(result)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="rounded-lg py-4 ml-3">
            <form onSubmit={handleSubmit(handleUpdate)} action="" className="space-y-4">
                <div>
                    <label
                        htmlFor="userName"
                        className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                        <input
                            {...register("name", {
                                required: "required",
                            })}
                            defaultValue={userData.name}
                            type="text"
                            id="userName"
                            placeholder="User Name"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-md"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-md peer-focus:top-2 peer-focus:text-sm">
                            Your Name
                        </span>
                    </label>
                    {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                </div>
                <div>
                    <label
                        htmlFor="number"
                        className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                        <input
                            {...register("phoneNumber", {
                                required: "required",
                                pattern: {
                                    value: /^\+?\d+$/,
                                    message: "invalid phone number"
                                }
                            })}
                            defaultValue={userData.phoneNumber}
                            id="number"
                            placeholder="Number"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-md"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-md peer-focus:top-2 peer-focus:text-sm">
                            Phone Number
                        </span>
                    </label>
                    {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber.message}</span>}
                </div>

                <div>
                    <label
                        htmlFor="address"
                        className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                        <input
                            {...register("address", {
                                required: "required"
                            })}
                            defaultValue={userData.address}
                            id="address"
                            placeholder="Address"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-md"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-md peer-focus:top-2 peer-focus:text-sm">
                            Address
                        </span>
                    </label>
                    {errors.address && <span className='text-red-500'>{errors.address.message}</span>}
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <button
                        onClick={closeModal}
                        type="submit"
                        className="inline-block w-full rounded-lg bg-orange-500 px-12 py-3 font-medium text-white sm:w-auto"
                    >
                        Save
                    </button>
                    <Link to={'/login'} className="underline">Forgot Password</Link>
                </div>
            </form>
        </div>
    )
}

export default AdminUpdate