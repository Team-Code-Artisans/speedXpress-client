import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../API Operations/Auth";
import { saveUser } from "../../API Operations/manageUsers";
import SmallSpinner from "../../components/smallSpinner/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {

    const [userEmail, setUserEmail] = useState('')
    const { signIn, loading, setLoading, signInWithGoogle, resetPassword } = useContext(AuthContext)

    const { handleSubmit, register, formState: { errors } } = useForm()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        const { email, password } = data;

        signIn(email, password)
            .then(result => {
                toast.success('Login Successful')
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err)
                setLoading(false)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            const user = (result.user)
            setAuthToken(result.user);
            saveUser({
                email: user?.email,
                name: user?.displayName,
                image: user?.photoURL,
                account_type: "regular",
            })

            setLoading(false)
            navigate(from, { replace: true })
        })
            .catch(err => {
                toast.error(err.message)
                console.log(err)
                setLoading(false)
            })
    }

    // Pass reset
    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('Please Check Your Email');
                setLoading(false)
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err)
                setLoading(false)
            })
    }

    return (
        <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
            <div className="flex md:w-[40%] w-full flex-col justify-start items-start">
                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                    Sign In
                </p>
                <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>
                <form onSubmit={handleSubmit(handleLogin)} className="mt-6 flex flex-col justify-start items-start w-full space-y-8 ">
                    <div className='w-full'>
                        <input
                            {...register("email", {
                                required: "required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })}
                            onChange={e => setUserEmail(e.target.value)}
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
                    <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-focus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
                        {loading ? <SmallSpinner /> : "Sign In"}
                    </button>
                </form>
                <div className="flex mt-8 space-x-4 text-lg self-center">
                    <button onClick={handleReset} className="underline">Forgot Password?</button>
                    <span>/</span>
                    <Link to={'/register'} className="underline">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;