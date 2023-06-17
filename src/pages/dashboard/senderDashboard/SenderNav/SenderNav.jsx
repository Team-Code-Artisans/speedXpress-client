import { Link, NavLink } from "react-router-dom";
import SenderDropdown from "./SenderDropdown";

const SenderNav = ({ mobile }) => {
    return (
        <>
            <li>
                <NavLink
                    to="/dashboard/regular"
                    className={({ isActive }) =>
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : "text-gray-100"
                        } ${isActive && `text-rose-600`}}`
                    }
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/regular/deliveries"
                    className={({ isActive }) =>
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : "text-gray-100"
                        } ${isActive && `text-rose-600`}}`
                    }
                >
                    Deliveries
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/regular/invoices"
                    className={({ isActive }) =>
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : "text-gray-100"
                        } ${isActive && `text-rose-600`}}`
                    }
                >
                    Invoices
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/regular/return"
                    className={({ isActive }) =>
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : "text-gray-100"
                        } ${isActive && `text-rose-600`}}`
                    }
                >
                    Return
                </NavLink>
            </li>
            <li>
                <Link
                    to={"/dashboard/regular/create-parcel"}
                    className="bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg"
                >
                    Create Parcel
                </Link>
            </li>
            <li>
                <SenderDropdown />
            </li>
        </>
    );
};

export default SenderNav;
