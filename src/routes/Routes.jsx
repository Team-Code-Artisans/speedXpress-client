import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../layout/Dashboard";
import Main from "../layout/Main";
import AboutUs from "../pages/About/AboutUs";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Features from "../pages/Features/Features";
import Pricing from "../pages/Pricing/Pricing";
import MerchantCreateParcel from "../pages/dashboard/MerchantDashboard/MerchantCreateParcel/MerchantCreateParcel";
import MerchantHome from "../pages/dashboard/MerchantDashboard/MerchantHome/MerchantHome";
import MerchantProfile from "../pages/dashboard/MerchantDashboard/MerchantProfile";
import { MyCustomers } from "../pages/dashboard/MerchantDashboard/MyCustomers";
import MyShops from "../pages/dashboard/MerchantDashboard/MyShops/MyShops";
import AdminHome from "../pages/dashboard/adminDashboard/AdminHome/AdminHome";
import { AllMarchants } from "../pages/dashboard/adminDashboard/AllMarchants";
import OrderTracking from "../pages/dashboard/adminDashboard/OrderTracking";
import ParcelList from "../pages/dashboard/adminDashboard/ParcelList/ParcelList";
import AllReturnParcel from "../pages/dashboard/adminDashboard/ReturnParcel/AllReturnParcel";
import { CompletedParcels } from "../pages/dashboard/senderDashboard/CompletedParcels";
import CreateParcel from "../pages/dashboard/senderDashboard/CreateParcel";
import SenderHistory from "../pages/dashboard/senderDashboard/SenderHistory";
import SenderParcelTracking from "../pages/dashboard/senderDashboard/SenderParcelTracking";
import { SenderPayment } from "../pages/dashboard/senderDashboard/SenderPayment";
import SenderReturnParcel from "../pages/dashboard/senderDashboard/senderReturn/SenderReturnParcel";
import Home from "../pages/home/Home";
import About from "../pages/home/about/About";
import MerchantDeliveries from "../pages/dashboard/MerchantDashboard/MerchantDeliveries/MerchantDeliveries";
import MerchantInvoices from "../pages/dashboard/MerchantDashboard/MerchantInvoices/MerchantInvoices";
import { EmployeeHome } from "../pages/dashboard/Employee Dashboard/EmployeeHome/EmployeeHome";
import MerchantRoutes from "./MerchantRoutes";



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



  //dianamic dashboard depend on user type or user role
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
        path: "/dashboard/regular",
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
        element: <MerchantRoutes><MerchantHome /></MerchantRoutes>,
      },
      {
        path: "/dashboard/merchant/deliveries",
        element: <MerchantRoutes><MerchantDeliveries /></MerchantRoutes>,
      },
      {
        path: "/dashboard/merchant/invoices",
        element: <MerchantRoutes><MerchantInvoices /></MerchantRoutes>,
      },
      {
        path: "/dashboard/merchant/create-parcel",
        element: <MerchantCreateParcel />,
      },
      {
        path: "/dashboard/merchant/my-shops",
        element: <MyShops />
      },
      {
        path: "/dashboard/merchant/my-customers",
        element: <MyCustomers />,
      },
      {
        path: "/dashboard/merchant/profile",
        element: <MerchantProfile />,
      },




      // employee routes
      {
        path: "/dashboard/employee",
        element: <EmployeeHome />,
      },


    ],
  },
]);

export default router;
