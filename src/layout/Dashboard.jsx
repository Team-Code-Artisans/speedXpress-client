import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { DashboardNavbar } from "../pages/dashboard/DashboardNavbar";


const DashBoard = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <DashboardNavbar />
            <p className="text-lg p-3.5 ">Welcome <span className="font-bold text-orange-700">{user?.displayName}</span></p>

            <Outlet>
            </Outlet>

        </div>
    );
};

export default DashBoard;