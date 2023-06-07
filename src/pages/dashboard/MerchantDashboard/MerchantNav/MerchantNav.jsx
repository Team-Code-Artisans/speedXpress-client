import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoSignOut } from 'react-icons/go'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineShop } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineCreate, MdInsertEmoticon, MdPayment, MdLocationPin, } from 'react-icons/md'

const EmployeeNav = ({ mobile }) => {

  const [show, setShow] = useState(false);

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
        <Link to={'/dashboard/merchant/create-parcel'} className='bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg'>Create Parcel</Link>
      </li>
      <li>
        <div className="relative">
          <div className="flex cursor-pointer" onClick={() => setShow(!show)}>
            <CgProfile size={'3rem'} className="text-white" />
            <div className="items-center flex">
              <div className="text-white px-2">
                {show ? (
                  <AiOutlineArrowUp size={'1.5rem'} />
                ) : (
                  <AiOutlineArrowDown size={'1.5rem'} />
                )}
              </div>
            </div>
          </div>
          {show && (
            <ul className="visible transition duration-300 opacity-100 bg-white shadow rounded mt-2 py-1 w-48 absolute">
              <li className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                <MdOutlineCreate size={'1.5rem'} />
                <span className="px-2">Create Parcel</span>
              </li>
              <li className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                <AiOutlineShop size={'1.5rem'} />
                <span className="px-2">My Shops</span>
              </li>
              <li className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                <MdLocationPin size={'1.5rem'} />
                <span className="px-2">Manage Pickup</span>
              </li>
              <li className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                <MdPayment size={'1.5rem'} />
                <span className="px-2">Payment History</span>
              </li>
              <li className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                <MdInsertEmoticon size={'1.5rem'} />
                <span className="px-2">Customers Info</span>
              </li>
              <li className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                <CgProfile size={'1.5rem'} />
                <span className="px-2">Profile</span>
              </li>
              <li className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                <GoSignOut size={'1.5rem'} />
                <span className="px-2">Sign Out</span>
              </li>
            </ul>
          )}
        </div>
      </li >
    </>
  );
};

export default EmployeeNav;
