import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {

    // const [userEmail, setUserEmail] = useState('')
    // const { signin, loading, setLoading, signInWithGoogle, resetPassword } =
    //     useContext(AuthContext)

    const { handleSubmit, register } = useForm()

    // const navigate = useNavigate()
    // const location = useLocation()
    // const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        console.log(data)
        // const { email, password } = data;

        // signin(email, password)
        //     .then(result => {
        //         toast.success('Login Successful✌')
        //         // console.log(result.user)
        //         setUserEmail(result.user?.email);
        //         console.log(userEmail)
        //         // Get Token and set it

        //         setLoading(false)
        //         navigate(from, { replace: true })
        //     })
        //     .catch(err => {
        //         toast.error(err.message)
        //         console.log(err)
        //         setLoading(false)
        //     })
    }

   

    return (
        <>
            <div
                className="relative w-full overflow-hidden bg-cover bg-[100%] bg-no-repeat bg-black">
                <img
                    src="https://images.unsplash.com/photo-1634646809203-f3b4adff9127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fpit=crop&w=870&q=80"
                    className=" top-0 left-0 h-screen w-screen -z-10 opacity-50 "
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  border-red-950">

                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen">
                        <div className="mx-auto max-w-lg text-white">

                            <div className="text-center text-3xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r  from-orange-600 via-amber-500 to-yellow">
                                    Login to your account
                                </span>
                            </div>
                            <form action="" className="mt-6 mb-0 space-y-4 bg-neutral rounded-lg p-8 shadow-2xl"
                                onSubmit={handleSubmit(handleLogin)}
                            >

                                <div>


                                    <div className="relative mt-1">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-neutral shadow-sm"
                                            placeholder="Enter email"
                                            required
                                            {...register("email", { required: "email is required" })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="relative mt-1">
                                        <input
                                            type="password"
                                            id="password"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md  text-black shadow-sm"
                                            placeholder="Enter password"
                                            required
                                            {...register("password", { required: "password is required" })}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow px-5 py-3 text-sm font-medium text-white"
                                >
                                    { " Sign in"}
                                   
                                </button>
                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-neutral border-2 border-slate-100 px-5 py-3 text-sm font-medium text-white"
                                    

                                >
                                    { "🌍 continue with google"}
                                </button>

                                <p className="text-center text-sm text-gray-100">
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