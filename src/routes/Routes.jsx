import { createBrowserRouter } from "react-router-dom";
import SenderDashboardMain from "../layout/DashboardAll/SenderDashboardMain";
import Main from "../layout/Main";
import SenderHistory from "../pages/dashboard/senderDashboard/SenderHistory";
import SenderHome from "../pages/dashboard/senderDashboard/SenderHome";
import SenderReturnProduct from "../pages/dashboard/senderDashboard/SenderReturnProduct";
import Home from "../pages/home/Home";
import About from "../pages/home/about/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            }
        ]
    },
    {
        path:"/senderDashboard",
        element:<SenderDashboardMain></SenderDashboardMain>,
        children:[
            {
                path:"/senderDashboard",
                element:<SenderHome></SenderHome>
            },
            {
                path:"/senderDashboard/productreturn",
                element:<SenderReturnProduct></SenderReturnProduct>
            },
            {
                path:"/senderDashboard/history",
                element:<SenderHistory></SenderHistory>
            },
        ]
    }
])

export default router;
