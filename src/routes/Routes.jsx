import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../layout/Dashboard";
import Main from "../layout/Main";
import SenderHistory from "../pages/dashboard/senderDashboard/SenderHistory";
import SenderHome from "../pages/dashboard/senderDashboard/SenderHome";
import SenderReturnProduct from "../pages/dashboard/senderDashboard/SenderReturnProduct";
import Home from "../pages/home/Home";
import About from "../pages/home/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "/dashboard",
        element: <SenderHome />,
      },
      {
        path: "/dashboard/productReturn",
        element: <SenderReturnProduct />,
      },
      {
        path: "/dashboard/history",
        element: <SenderHistory />,
      },
    ],
  },
]);

export default router;
