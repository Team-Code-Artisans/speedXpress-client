import { useState } from "react";
import { NavLink } from "react-router-dom";

const SenderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              speedXpress
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/dashboard"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4"
              >
                Dash board
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/productreturn"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4"
              >
                Return
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/history"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4"
              >
                History
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard">
                <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white">
                  <span className="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-600 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                    Create parcel
                  </span>
                  <svg
                    viewBox="0 0 46 16"
                    height="10"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    id="arrow-horizontal"
                    className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-white"
                  ></svg>
                </button>
              </NavLink>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          speedXpress
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/dashboard"
                          className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4"
                        >
                          Dash board
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/dashboard/productreturn"
                          className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4"
                        >
                          Return
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/dashboard/history"
                          className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4"
                        >
                          History
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SenderNav;
