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
import RegularInvoices from "../pages/dashboard/RegularDashboard/RegularInvoices/RegularInvoices";
import RegularProfile from "../pages/dashboard/RegularDashboard/RegularProfile/RegularProfile";
import RegularReturnParcel from "../pages/dashboard/RegularDashboard/RegularReturn/RegularReturnParcel";
import AdminHome from "../pages/dashboard/adminDashboard/AdminHome/AdminHome";
import AdminInvoices from "../pages/dashboard/adminDashboard/AdminInvoices/AdminInvoices";
import AdminProfile from "../pages/dashboard/adminDashboard/AdminProfile/AdminProfile";
import OrderTracking from "../pages/dashboard/adminDashboard/OrderTracking/OrderTracking";
import AdminDeliveries from "../pages/dashboard/adminDashboard/adminDeliveies/AdminDeliveries";
import AllReturnedParcels from "../pages/dashboard/adminDashboard/adminDeliveies/AllReturnedParcels";
import AdminEmployee from "../pages/dashboard/adminDashboard/adminEmployee/AdminEmployee";
import AdminMerchant from "../pages/dashboard/adminDashboard/adminMerchant/AdminMerchant";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";



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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/order-tracking",
        element: <OrderTracking />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />
  },

  //dianamic dashboard depend on user type or user role
  {
    path: "/dashboard",
    element: <DashBoard><AdminHome /></DashBoard>,
    children: [

      // admin routes
      {
        path: "/dashboard/admin",
        element: <PrivateRoute><AdminHome /></PrivateRoute>,
      },
      {
        path: "/dashboard/admin/order-tracking",
        element: <PrivateRoute><OrderTracking /></PrivateRoute>,
      },
      {
        path: "/dashboard/admin/deliveries",
        element: <PrivateRoute><AdminDeliveries /></PrivateRoute>,
      },
      {
        path: "/dashboard/admin/invoices",
        element: <PrivateRoute><AdminInvoices /></PrivateRoute>,
      },
      {
        path: "/dashboard/admin/manage-merchant",
        element: <PrivateRoute> <AdminMerchant /></PrivateRoute>,
      },
      {
        path: "/dashboard/admin/manage-employee",
        element: <PrivateRoute> <AdminEmployee /></PrivateRoute>,
      },
      {
        path: "/dashboard/admin/return",
        element: <PrivateRoute> <AllReturnedParcels /></PrivateRoute>,
      },
      {
        path: "/dashboard/admin/profile",
        element: <PrivateRoute><AdminProfile /></PrivateRoute>,
      },



      // regular user routes
      {
        path: "/dashboard/regular",
        element: <PrivateRoute><RegularHome /></PrivateRoute>,
      },
      {
        path: "/dashboard/regular/create-parcel",
        element: <PrivateRoute><RegularCreateParcel /></PrivateRoute>,
      },
      {
        path: "/dashboard/regular/deliveries",
        element: <PrivateRoute><RegularUserDeliveries /></PrivateRoute>,
      },
      {
        path: "/dashboard/regular/invoices",
        element: <PrivateRoute><RegularInvoices /></PrivateRoute>,
      },
      {
        path: "/dashboard/regular/return",
        element: <PrivateRoute><RegularReturnParcel /></PrivateRoute>,
      },
      {
        path: "/dashboard/regular/profile",
        element: <PrivateRoute><RegularProfile /></PrivateRoute>,
      },




      // Merchant Routes

      {
        path: "/dashboard/merchant",
        element: <PrivateRoute><MerchantHome /></PrivateRoute>,
      },
      {
        path: "/dashboard/merchant/deliveries",
        element: <PrivateRoute><MerchantDeliveries /></PrivateRoute>,
      },
      {
        path: "/dashboard/merchant/invoices",
        element: <PrivateRoute><MerchantInvoices /></PrivateRoute>,
      },
      {
        path: "/dashboard/merchant/create-parcel",
        element: <PrivateRoute><MerchantCreateParcel /></PrivateRoute>,
      },
      {
        path: "/dashboard/merchant/my-shops",
        element: <PrivateRoute> <MyShops /></PrivateRoute>
      },
      {
        path: "/dashboard/merchant/my-customers",
        element: <PrivateRoute><MyCustomers /></PrivateRoute>,
      },
      {
        path: "/dashboard/merchant/profile",
        element: <PrivateRoute><MerchantProfile /></PrivateRoute>,
      },




      // employee routes
      {
        path: "/dashboard/employee",
        element: <PrivateRoute><EmployeeHome /></PrivateRoute>,
      },
      {
        path: "/dashboard/employee/deliveries",
        element: <PrivateRoute> <EmployeeDeliveries /></PrivateRoute>,
      },
      {
        path: "/dashboard/employee/earnings",
        element: <PrivateRoute> <EmployeeEarnings /></PrivateRoute>,
      },
      {
        path: "/dashboard/employee/profile",
        element: <PrivateRoute> <EmployeeProfile /></PrivateRoute>,
      },


    ],
  },
]);

export default router;
