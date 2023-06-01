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
import ReturnParcel from "../pages/dashboard/adminDashboard/ReturnParcel";
import { CompletedParcels } from "../pages/dashboard/senderDashboard/CompletedParcels";
import SenderHistory from "../pages/dashboard/senderDashboard/SenderHistory";
import SenderHome from "../pages/dashboard/senderDashboard/SenderHome";
import { SenderPayment } from "../pages/dashboard/senderDashboard/SenderPayment";
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
        element: <ReturnParcel />,
      },
      // sender routes
      {
        path: "/dashboard/sender",
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
      {
        path: "/dashboard/marchents",
        element: <AllMarchants />,
      },
      {
        path: "/dashboard/payment",
        element: <SenderPayment />,
      },
      {
        path: "/dashboard/completed-parcel",
        element: <CompletedParcels />,
      },
    ],
  },
]);

export default router;
