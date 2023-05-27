import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/home/about/About";
import SenderDashboardMain from "../layout/DashboardAll/SenderDashboardMain";
import SenderReturnProduct from "../pages/senderDashboard/SenderReturnProduct";
import SenderHome from "../pages/senderDashboard/SenderHome";
import SenderHistory from "../pages/senderDashboard/SenderHistory";

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
