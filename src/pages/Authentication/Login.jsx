import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div
                className="relative w-full overflow-hidden bg-cover bg-[100%] bg-no-repeat bg-black">
                <img
                    src="https://images.unsplash.com/photo-1634646809203-f3b4adff9127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    className=" top-0 left-0 h-screen w-screen -z-10 opacity-50 "
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  border-red-950">

                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen">
                        <div className="mx-auto max-w-lg text-white">

                            <div className="text-center text-3xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow">
                                    Login to your account
                                </span>
                            </div>
                            <form action="" className="mt-6 mb-0 space-y-4 bg-neutral rounded-lg p-8 shadow-2xl"

                            >

                                <div>


                                    <div className="relative mt-1">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-neutral shadow-sm"
                                            placeholder="Enter email"
                                            required
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
                                        // {...register("password", { required: "password is required" })}
                                        />

                                        <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow px-5 py-3 text-sm font-medium text-white"
                                >
                                    Sign in
                                </button>
                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-neutral border-2 border-slate-500 px-5 py-3 text-sm font-medium text-white"
                                // onClick={handleGoogleSignin}

                                >
                                    🌍 continue with google
                                </button>

                                <p className="text-center text-sm text-gray-500">
                                    No account?
                                    <Link className="underline" to="/register">Sign up</Link>

                                </p>
                            </form>
                        </div>
                    </div>



                </div>
            </div >
        </>
    );
};

export default Login;