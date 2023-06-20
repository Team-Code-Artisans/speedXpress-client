import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { getRole } from "../../API Operations/manageUsers";
import EmployeeNav from "./Employee Dashboard/EmployeeNav/EmployeeNav";
import MerchantNav from "./MerchantDashboard/MerchantNav/MerchantNav";
import AdminNav from "./adminDashboard/AdminNav/AdminNav";
import { Link } from "react-router-dom";
import RegularNav from "./RegularDashboard/RegularNav/RegularNav";


export const DashboardNavbar = () => {
    // here will be change .. for get role info
    const [role, setRole] = useState("");

    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (user !== null) {
            getRole(user.email)
                .then(data => {
                    setRole(data)
                })
        }

    }, [user])

    return (
        <div className="bg-gray-900">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to={'/'}
                        aria-label="Company"
                        title="Company"
                        className="text-xl font-bold tracking-wide text-gray-100 uppercase"
                    >
                        Speed
                        <span className="text-orange-600">
                            Xpress
                        </span>
                    </Link>
                    <ul className="md:flex items-center space-x-8">

                        {role === "regular" && <RegularNav />}
                        {role === "admin" && <AdminNav />}
                        {role === "merchant" && <MerchantNav />}
                        {role === "employee" && <EmployeeNav />}

                    </ul>
                </div>
            </div>
        </div>
    )
}
