import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../API Operations/Auth";
import { getImageUrl } from "../../API Operations/ImageUpload";
import { saveUser } from "../../API Operations/manageUsers";
import SmallSpinner from "../../components/smallSpinner/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";
import MerchantForm from "./MerchantForm";
import RegularForm from "./RegularForm";
import EmployeeForm from "./EmployeeForm";
import Tabs from "./Tabs";

const Register = () => {

    const [loading, setLoading] = useState(false)
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const { register, reset, handleSubmit } = useForm()
    const [activeStatus, setActiveStatus] = useState(1);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const handleSignUp = (data) => {
        setLoading(true)
        const { email, password, fullName, account } = data;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

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
                        account_type: account,
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
        <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
            <div className="flex md:w-1/2 w-full flex-col justify-start items-start">
                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                    Sign Up
                </p>
                <Tabs activeStatus={activeStatus} setActiveStatus={setActiveStatus} />

                {activeStatus === 1 && <RegularForm />}
                {activeStatus === 2 && <MerchantForm />}
                {activeStatus === 3 && <EmployeeForm />}
            </div>
        </div>
    );
};

export default Register;

