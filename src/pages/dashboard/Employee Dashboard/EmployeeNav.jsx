import { NavLink } from "react-router-dom";

const EmployeeNav = ({ mobile }) => {

    return (

        <>
            <li>
                <NavLink
                    to="/dashboard/employee"
                    className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/pending-deliveries"
                    className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
                >
                    Pending Deliveries
                </NavLink>
            </li>




        </>

    );
};

export default EmployeeNav;
