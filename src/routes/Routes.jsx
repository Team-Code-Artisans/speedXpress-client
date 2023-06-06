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
import { CompletedParcels } from "../pages/dashboard/senderDashboard/CompletedParcels";
import SenderHistory from "../pages/dashboard/senderDashboard/SenderHistory";
import { SenderPayment } from "../pages/dashboard/senderDashboard/SenderPayment";
import AllReturnParcel from "../pages/dashboard/adminDashboard/ReturnParcel/AllReturnParcel";
import CreateParcel from "../pages/dashboard/senderDashboard/CreateParcel";
import SenderParcelTracking from "../pages/dashboard/senderDashboard/SenderParcelTracking";
import SenderReturnParcel from "../pages/dashboard/senderDashboard/senderReturn/SenderReturnParcel";
import Home from "../pages/home/Home";
import About from "../pages/home/about/About";
import Features from "../pages/Features/Features";
import AboutUs from "../pages/About/AboutUs";
import Pricing from "../pages/Pricing/Pricing";
import MerchantHome from "../pages/dashboard/MerchantDashboard/MerchantHome/MerchantHome";

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
        path: "/features",
        element: <Features />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
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
        element: <AllReturnParcel />,
      },
      // sender routes
      {
        path: "/dashboard/sender",
        element: <SenderParcelTracking />,
      },
      {
        path: "/dashboard/create-parcel",
        element: <CreateParcel />,
      },
      {
        path: "/dashboard/history",
        element: <SenderHistory />,
      },
      {
        path: "/dashboard/sender-product-return",
        element: <SenderReturnParcel />,
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

      // Merchant Routes
      {
        path: "/dashboard/merchant",
        element: <MerchantHome />,
      },
    ],
  },
]);

export default router;
