import { NavLink } from "react-router-dom";
import AdminDropdown from "./AdminDropdown";

const AdminNav = () => {
    return (
        <>
            <li>
                <NavLink
                    to="/dashboard/admin"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/admin/order-tracking"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Tracking
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/admin/deliveries"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Deliveries
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/admin/manage-merchant"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Merchants
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/admin/manage-employee"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Employees
                </NavLink>
            </li>
            <li>
                <AdminDropdown />
            </li>
        </>
    );
};

export default AdminNav;
