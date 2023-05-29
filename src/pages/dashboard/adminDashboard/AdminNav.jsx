import { NavLink } from "react-router-dom";

export const AdminNav = ({ mobile }) => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/admin"
          className={({ isActive }) =>
            `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${
              mobile ? `text-black` : "text-gray-100"
            } ${isActive && `text-rose-600`}}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/employee"
          className={({ isActive }) =>
            `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${
              mobile ? `text-black` : "text-gray-100"
            } ${isActive && `text-rose-600`}}`
          }
        >
          Employee
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/order-tracking"
          className={({ isActive }) =>
            `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${
              mobile ? `text-black` : "text-gray-100"
            } ${isActive && `text-rose-600`}}`
          }
        >
          Tracking
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/parcel-list"
          className={({ isActive }) =>
            `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${
              mobile ? `text-black` : "text-gray-100"
            } ${isActive && `text-rose-600`}}`
          }
        >
          All Parcel
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/return-parcel"
          className={({ isActive }) =>
            `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${
              mobile ? `text-black` : "text-gray-100"
            } ${isActive && `text-rose-600`}}`
          }
        >
          Return Parcel
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/payment"
          className={({ isActive }) =>
            `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${
              mobile ? `text-black` : "text-gray-100"
            } ${isActive && `text-rose-600`}}`
          }
        >
          Payment
        </NavLink>
      </li> */}
    </>
  );
};
