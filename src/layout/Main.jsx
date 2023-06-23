import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar1 from "../pages/shared/navbar1/navbar1";

const Main = () => {

    const location = useLocation()

    return (
        <div>
            <div className={`${location.pathname == '/' | '/home' && "md:hidden"}`}>
                <Navbar1 />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;