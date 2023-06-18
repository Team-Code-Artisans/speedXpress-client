import { Link } from "react-router-dom";
import SenderDropdown from "./SenderDropdown";

const SenderNav = () => {
    return (
        <>
            <li>
                <Link
                    to="/dashboard/regular"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Dashboard
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/regular/deliveries"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Deliveries
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/regular/invoices"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Invoices
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/regular/return"
                    className={
                        `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 text-white hidden md:block`
                    }
                >
                    Return
                </Link>
            </li>
            <li>
                <Link
                    to={"/dashboard/regular/create-parcel"}
                    className="bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg hidden md:block"
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
