import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../layout/Dashboard";
import Main from "../layout/Main";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AdminHome from "../pages/dashboard/adminDashboard/AdminHome/AdminHome";
import { AllMarchants } from "../pages/dashboard/adminDashboard/AllMarchants";
import EmployeePage from "../pages/dashboard/adminDashboard/EmployeePage";
import OrderTracking from "../pages/dashboard/adminDashboard/OrderTracking";
import ParcelList from "../pages/dashboard/adminDashboard/ParcelList/ParcelList";
import SenderHistory from "../pages/dashboard/senderDashboard/SenderHistory";
import SenderHome from "../pages/dashboard/senderDashboard/SenderHome";
import Home from "../pages/home/Home";
import About from "../pages/home/about/About";
import AllReturnParcel from "../pages/dashboard/adminDashboard/ReturnParcel/AllReturnParcel";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard><AdminHome /></DashBoard>,
    children: [
      // admin routes
      {
        path: "/dashboard/",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/admin",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/employee",
        element: <EmployeePage />,
      },
      {
        path: "/dashboard/order-tracking",
        element: <OrderTracking />,
      },
      {
        path: "/dashboard/parcel-list",
        element: <ParcelList />,
      },
      {
        path: "/dashboard/return-parcel",
        element:<AllReturnParcel/>,
      },
      // sender routes
      {
        path: "/dashboard/sender",
        element: <SenderHome />,
      },
      {
        path: "/dashboard/history",
        element: <SenderHistory />,
      },
      {
        path: "/dashboard/marchents",
        element: <AllMarchants />,
      },
    ],
  },
]);

export default router;
