import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div
                className="relative w-full overflow-hidden bg-cover bg-[100%] bg-no-repeat bg-black">
                <img
                    src="https://images.unsplash.com/photo-1634646809203-f3b4adff9127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    className=" top-0 left-0 h-screen w-screen -z-10 opacity-50 "
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  border-red-950">
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-white">
                        <div className="mx-auto max-w-lg">
                            <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
                                Create new account
                            </h1>
                            <form action="" className="mt-6 mb-0 space-y-4 bg-neutral rounded-lg p-8 shadow-2xl"

                            >
                                <div>

                                    <div className="relative mt-1">
                                        <input
                                            type="FullName"
                                            id="FullName"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-neutral shadow-sm"
                                            placeholder="Enter full-Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    {/* <label htmlFor="image" className="text-sm font-medium">upload image</label> */}
                                    <div className="relative mt-1">

                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="file_input">Upload image</label>
                                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none py-3.5 px-4" id="file_input" type="file" placeholder="upload image" accept="image/png, image/jpeg" />
                                    </div>

                                </div>
                                <div>
                                    <div className="relative mt-1">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-neutral shadow-sm"
                                            placeholder="Enter email"
                                        />
                                    </div>

                                </div>

                                <div>
                                    <div className="relative mt-1">
                                        <input
                                            type="password"
                                            id="password"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md  text-neutral shadow-sm"
                                            placeholder="Enter password"
                                            required

                                        />
                                    </div>

                                </div>
                                {/* radio */}
                                <div className="flex justify-between ">

                                    <div className="flex space-x-3">
                                        <div className="flex items-center mb-4">
                                            <input type="radio" value="employee" name="account" htmlFor="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                            <label htmlFor="account-type" className="ml-2 text-sm font-medium text-slate-50 ">Employee</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input type="radio"
                                                name="account"
                                                value="marchant" htmlFor="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                            <label htmlFor="account-type" className="ml-2 text-sm font-medium text-slate-50 ">Marchant</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input type="radio"
                                                name="account"
                                                value="Reciever" htmlFor="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                            <label htmlFor="account-type" className="ml-2 text-sm font-medium text-slate-50 ">reciever</label>
                                        </div>

                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow px-5 py-3 text-sm font-medium text-white"
                                >
                                    Sign up
                                </button>

                                <p className="text-center text-sm text-gray-500">
                                    already have an account?
                                    <Link className="underline" to="/login">Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div >
                </div>
            </div>
        </>
    );
};

export default Register;

