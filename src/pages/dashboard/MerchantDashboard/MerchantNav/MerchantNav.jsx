import { Link, NavLink } from "react-router-dom";
import MerchantDropdown from "./MerchantDropdown";

const MerchantNav = ({ mobile }) => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/merchant"
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
          to="/dashboard/merchant/deliveries"
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
          to="/dashboard/merchant/invoices"
          className={({ isActive }) =>
            `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : "text-gray-100"
            } ${isActive && `text-rose-600`}}`
          }
        >
          Invoices
        </NavLink>
      </li>
      <li>
        <Link
          to={"/dashboard/merchant/create-parcel"}
          className="bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg"
        >
          Create Parcel
        </Link>
      </li>
      <li>
        <MerchantDropdown />
      </li>
    </>
  );
};

export default MerchantNav;
