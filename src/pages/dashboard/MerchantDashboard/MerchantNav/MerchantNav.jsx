import { Link, NavLink } from "react-router-dom";
import MerchantDropdown from "./MerchantDropdown";

const MerchantNav = ({ mobile }) => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/merchant"
          className={
            `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/merchant/deliveries"
          className={
            `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
          }
        >
          Deliveries
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/merchant/invoices"
          className={
            `font-medium tracking-wide  transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4 text-white hidden md:block`
          }
        >
          Invoices
        </NavLink>
      </li>
      <li>
        <Link
          to={"/dashboard/merchant/create-parcel"}
          className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg md:block hidden"
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
