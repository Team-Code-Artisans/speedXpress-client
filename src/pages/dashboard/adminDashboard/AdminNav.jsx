import { NavLink } from "react-router-dom"


export const AdminNav = ({ mobile }) => {
    return (
        <>
            <li>
                <NavLink
                    to="/create-parcel"
                    className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
                >
                    Create parcel
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/parcel-requets"
                    className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
                >
                    Parcel request
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/employee-list"
                    className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
                >
                    Employee Lists
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/parcel-shipped"
                    className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
                >
                    Parcel Shipped
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/parcel-returned"
                    className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
                >
                    Parcel returned
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-parcels"
                    className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
                >
                    All parcels
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/payment"
                    className={({ isActive }) => `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : 'text-gray-100'} ${isActive && `text-rose-600`}}`}
                >
                    Payment
                </NavLink>
            </li>
        </>
    )
}
