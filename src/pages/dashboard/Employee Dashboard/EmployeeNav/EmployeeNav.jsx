import { Link } from "react-router-dom";
import EmployeeDropdown from "./EmployeeDropdown";

const EmployeeNav = () => {
    return (
        <>
            <li>
                <Link
                    to="/dashboard/employee"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Dashboard
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/employee/deliveries"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Deliveries
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/employee/earnings"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Earnings
                </Link>
            </li>
            <li>
                <EmployeeDropdown />
            </li>
        </>
    );
};

export default EmployeeNav;
