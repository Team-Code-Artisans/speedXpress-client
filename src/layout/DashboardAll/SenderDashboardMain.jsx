import { Outlet } from "react-router-dom";
import SenderNav from "../../pages/senderDashboard/SenderNav";

const SenderDashboardMain = () => {
    return (
        <div>
            <SenderNav></SenderNav>

            <Outlet></Outlet>

        </div>
    );
};

export default SenderDashboardMain;