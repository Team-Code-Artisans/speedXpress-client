import { Outlet } from "react-router-dom";
import SenderNav from "../pages/dashboard/senderDashboard/SenderNav";


const DashBoard = () => {
    return (
        <div>
            <SenderNav></SenderNav>

            <Outlet></Outlet>

        </div>
    );
};

export default DashBoard;