import { Link, NavLink } from "react-router-dom";
import AdminDropdown from "./AdminDropdown";

const AdminNav = ({ mobile }) => {
    return (
        <>
            <li>
                <NavLink
                    to="/dashboard/admin"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 text-white`
                    }
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/admin/parcel-tracking"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 text-white`
                    }
                >
                    Tracking
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/admin/deliveries"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 text-white`
                    }
                >
                    Deliveries
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/admin/manage-merchants"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 text-white`
                    }
                >
                    Merchants
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/admin/manage-employee"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 text-white`
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
