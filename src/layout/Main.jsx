import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";
import Navbar1 from "../pages/shared/navbar1/navbar1";

const Main = () => {
    return (
        <div>
            {/* <div className="md:hidden">
                <Navbar1 />
            </div> */}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;