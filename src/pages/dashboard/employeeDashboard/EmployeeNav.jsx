import { NavLink } from "react-router-dom";

const EmployeeNav = ({ mobile }) => {
    return (
        <>
            <li>
                <NavLink
                    to="/dashboard/pending-deliveries-list"
                    className={({ isActive }) =>
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : "text-gray-100"
                        } ${isActive && `text-rose-600`}}`
                    }
                >
                    Pending deliveries list
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/completed-deliveries"
                    className={({ isActive }) =>
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : "text-gray-100"
                        } ${isActive && `text-rose-600`}}`
                    }
                >
                    Completed deliveries
                </NavLink>
            </li>
        </>
    );
};

export default EmployeeNav;