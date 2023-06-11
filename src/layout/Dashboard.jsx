import { Outlet } from "react-router-dom";
import { DashboardNavbar } from "../pages/dashboard/DashboardNavbar";

const DashBoard = () => {
    return (
        <div>
            <DashboardNavbar />
            <Outlet />
        </div>
    );
};

export default DashBoard;