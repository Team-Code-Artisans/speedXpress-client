import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../layout/Dashboard";
import Main from "../layout/Main";
import AboutUs from "../pages/About/AboutUs";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Features from "../pages/Features/Features";
import Pricing from "../pages/Pricing/Pricing";
import EmployeeDeliveries from "../pages/dashboard/Employee Dashboard/Employee Deliveries/EmployeeDeliveries";
import EmployeeEarnings from "../pages/dashboard/Employee Dashboard/Employee Earnings/EmployeeEarnings";
import { EmployeeHome } from "../pages/dashboard/Employee Dashboard/EmployeeHome/EmployeeHome";
import EmployeeProfile from "../pages/dashboard/Employee Dashboard/EmployeeProfile/EmployeeProfile";
import MerchantCreateParcel from "../pages/dashboard/MerchantDashboard/MerchantCreateParcel/MerchantCreateParcel";
import MerchantDeliveries from "../pages/dashboard/MerchantDashboard/MerchantDeliveries/MerchantDeliveries";
import MerchantHome from "../pages/dashboard/MerchantDashboard/MerchantHome/MerchantHome";
import MerchantInvoices from "../pages/dashboard/MerchantDashboard/MerchantInvoices/MerchantInvoices";
import MerchantProfile from "../pages/dashboard/MerchantDashboard/MerchantProfile/MerchantProfile";
import { MyCustomers } from "../pages/dashboard/MerchantDashboard/MyCustomers";
import MyShops from "../pages/dashboard/MerchantDashboard/MyShops/MyShops";
import RegularCreateParcel from "../pages/dashboard/RegularDashboard/RegularCreateParcel/RegularCreateParcel";
import RegularUserDeliveries from "../pages/dashboard/RegularDashboard/RegularDeliverys/RegularUserDeliveries";
import RegularHome from "../pages/dashboard/RegularDashboard/RegularHome/RegularHome";
import RegularProfile from "../pages/dashboard/RegularDashboard/RegularProfile/RegularProfile";
import RegularReturnParcel from "../pages/dashboard/RegularDashboard/RegularReturn/RegularReturnParcel";
import AdminHome from "../pages/dashboard/adminDashboard/AdminHome/AdminHome";
import AdminProfile from "../pages/dashboard/adminDashboard/AdminProfile/AdminProfile";
import OrderTracking from "../pages/dashboard/adminDashboard/OrderTracking/OrderTracking";
import AdminDeliveries from "../pages/dashboard/adminDashboard/adminDeliveies/AdminDeliveries";
import AdminEmployee from "../pages/dashboard/adminDashboard/adminEmployee/AdminEmployee";
import AdminMerchant from "../pages/dashboard/adminDashboard/adminMerchant/AdminMerchant";
import Home from "../pages/home/Home";
import About from "../pages/home/about/About";
import MerchantRoutes from "./MerchantRoutes";
import RegularUserDeliveries from "../pages/dashboard/RegularDashboard/RegularDeliverys/RegularUserDeliveries";



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
        path: "/dashboard/admin",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/admin/order-tracking",
        element: <OrderTracking />,
      },
      {
        path: "/dashboard/admin/deliveries",
        element: <AdminDeliveries />,
      },
      {
        path: "/dashboard/admin/invoices",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/admin/manage-merchant",
        element: <AdminMerchant />,
      },
      {
        path: "/dashboard/admin/manage-employee",
        element: <AdminEmployee />,
      },
      {
        path: "/dashboard/admin/return",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/admin/profile",
        element: <AdminProfile />,
      },


      // regular user routes
      {
        path: "/dashboard/regular",
        element: <RegularHome />,
      },
      {
        path: "/dashboard/regular/create-parcel",
        element: <RegularCreateParcel />,
      },
      {
        path: "/dashboard/regular/deliveries",
        element: <RegularUserDeliveries />,
      },
      {
        path: "/dashboard/regular/invoices",
        element: <div>invoice <small>print</small></div>,
      },
      {
        path: "/dashboard/regular/return",
        element: <RegularReturnParcel />,
      },
      {
        path: "/dashboard/regular/profile",
        element: <RegularProfile />,
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
      {
        path: "/dashboard/employee/deliveries",
        element: <EmployeeDeliveries />,
      },
      {
        path: "/dashboard/employee/earnings",
        element: <EmployeeEarnings />,
      },
      {
        path: "/dashboard/employee/profile",
        element: <EmployeeProfile />,
      },


    ],
  },
]);

export default router;
