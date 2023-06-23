import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../API Operations/Auth";
import { saveUser } from "../../API Operations/manageUsers";
import { AuthContext } from "../../contexts/AuthProvider";
import EmployeeForm from "./EmployeeForm";
import MerchantForm from "./MerchantForm";
import RegularForm from "./RegularForm";
import Tabs from "./Tabs";

const Register = () => {

    const { signInWithGoogle, setLoading } = useContext(AuthContext)
    const [activeStatus, setActiveStatus] = useState(1);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

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

    return (
        <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
            <div className="flex xl:w-[40%] w-full flex-col justify-start items-start">
                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                    Sign Up
                </p>
                <Tabs activeStatus={activeStatus} setActiveStatus={setActiveStatus} />
                {
                    activeStatus === 1 &&
                    <>
                        <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-blue-400 mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                        <RegularForm />
                    </>
                }
                {activeStatus === 2 && <MerchantForm />}
                {activeStatus === 3 && <EmployeeForm />}

                <div className="flex mt-8 space-x-4 text-lg self-center">
                    <span>Already Have An Account</span>
                    <Link to={'/login'} className="underline">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;

