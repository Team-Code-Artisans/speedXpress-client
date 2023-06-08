import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../API Operations/Auth";
import { getImageUrl } from "../../API Operations/ImageUpload";
import { saveUser } from "../../API Operations/manageUsers";
import SmallSpinner from "../../components/smallSpinner/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {

    const [loading, setLoading] = useState(false)
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const { register, reset, handleSubmit } = useForm()

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"




    const handleSignup = (data) => {
        setLoading(true)
        // console.log(data);
        const { email, password, fullName, account } = data;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        // console.log(image);

        //  imgbb key =570054ebfb6d3aee9ac5eb169f91dce2

        getImageUrl(image)
            .then(data => {
                console.log(data)
                // create user
                createUser(email, password).then(result => {
                    const user = result.user;
                    console.log(user);
                    toast.success("login success");
                    reset();
                    const userData = {
                        email: user?.email,
                        name: fullName,
                        image: data,
                        account_type: account ? account : "regular",
                    }
                    console.log(userData)
                    setAuthToken(user);
                    // save user to Db
                    saveUser(userData)
                    // update profile
                    updateUserProfile(fullName, data)
                        .then(() => {
                            verifyEmail().then(() => {
                                toast.success("Please check email for verification link");
                                setLoading(false);
                                navigate(from, { replace: true })
                            })

                        })

                })
                    .catch(err => {
                        console.error(err.message)
                        setLoading(false)
                    })

            })
            .catch(err => {
                console.error(err);
                // if error occurs we stop the small spinner
                setLoading(false);
            })




    }



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
                            <div className="text-center text-3xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r  from-orange-600 via-amber-500 to-yellow">
                                    Login to your account
                                </span>
                            </div>
                            <p>Already have an account <Link>Signin</Link></p>
                            <form action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
                                onSubmit={handleSubmit(handleSignup)}
                            >
                                <div>

                                    <div className="relative mt-1">
                                        <input
                                            type="FullName"
                                            id="FullName"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-black shadow-sm"
                                            placeholder="Enter full-Name"
                                            required
                                            {...register("fullName")}
                                        />
                                    </div>
                                </div>
                                <div>
                                    {/* <label htmlFor="image" className="text-sm font-medium">upload image</label> */}
                                    <div className="relative mt-1">

                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="file_input">Upload image</label>
                                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none py-3.5 px-4" id="file_input" type="file" placeholder="upload image" accept="image/png, image/jpeg"
                                            {...register("image")} />
                                    </div>

                                </div>
                                <div>
                                    <div className="relative mt-1">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-black shadow-sm"
                                            placeholder="Enter email"
                                            {...register("email")}
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
                                            {...register("password")}
                                        />
                                    </div>

                                </div>
                                {/* radio */}
                                <div className="flex justify-between ">

                                    <div className="flex space-x-3">
                                        <div className="flex items-center mb-4">
                                            <input type="radio" value="employee" name="account" htmlFor="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                {...register("account")} />
                                            <label htmlFor="account-type" className="ml-2 text-sm font-medium text-slate-50 ">Employee</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input type="radio"
                                                name="account"
                                                value="merchant" htmlFor="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                {...register("account")} />
                                            <label htmlFor="account-type" className="ml-2 text-sm font-medium text-slate-50 ">Marchant</label>
                                        </div>
                                        {/* <div className="flex items-center mb-4">
                                            <input type="radio"
                                                name="account"
                                                value="regular" htmlFor="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                {...register("account")} />
                                            <label htmlFor="account-type" className="ml-2 text-sm font-medium text-slate-50 ">regular</label>
                                        </div> */}

                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow px-5 py-3 text-sm font-medium text-white"
                                >

                                    {loading ? <SmallSpinner /> : "Sign up"}
                                </button>

                                <p className="text-center text-sm text-white">
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

