import { NavLink } from "react-router-dom";

const SenderNav = ({ mobile }) => {

  return (

    <>
      <li>
        <NavLink
          to="/dashboard/sender"
          className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/productreturn"
          className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
        >
          Return
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/history"
          className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
        >
          History
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/create-parcel"
          className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
        >
          Create parcel
        </NavLink>
      </li>


    </>

  );
};

export default SenderNav;
