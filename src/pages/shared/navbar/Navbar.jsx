import { useContext, useEffect, useState } from "react";
import { BsClockHistory, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgLogOut } from 'react-icons/cg';
import { FaFacebookMessenger } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';


import { Link } from "react-router-dom";
import { getRole } from "../../../API Operations/manageUsers";
// import logo from '../../../Assets/mainlogo.png';
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const [role, setRole] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    getRole(user?.email)
      .then(data => {
        console.log(data)
        setRole(data)
      })
  }, [user, role])


  return (
    <div>

      {/* upper line of nav  */}
      <div className="hidden bg-gray-800 py-1 text-zinc-500 font-semibold lg:flex justify-center gap-4">
        <div className="mx-4"><span><ImLocation2 className="inline text-yellow"></ImLocation2></span>2500 Southbranch Blvd A, United States</div>
        <div className="mx-4"><span><BsClockHistory className="inline text-yellow"></BsClockHistory></span>Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</div>

        {/* social icon */}
        <div>
          <span><FaFacebookMessenger className="inline mx-2"></FaFacebookMessenger></span>
          <span><BsLinkedin className="inline mx-2"></BsLinkedin></span>
          <span><BsTwitter className="inline mx-2"></BsTwitter></span>
        </div>
      </div>




      <div className="bg-gradient-to-r  from-blue-600 via-amber-500 to-blue-700">
        <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                {/* <img className="w-40 rounded-xl" src={logo} alt="mainLogo" /> */}
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/order-tracking"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Tracking Parcel
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  About us
                </Link>
              </li>
              {
                user?.email ?
                  <li>
                    <Link
                      to={`/dashboard/${role}`}
                      aria-label="Dashboard"
                      title="Dashboard"
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      Dashboard
                    </Link>
                  </li>
                  :
                  <></>
              }

            </ul>
            <ul className="flex items-center hidden space-x-8 lg:flex">

              {
                user
                  && user?.email ?
                  <li>
                    <button type="button" className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-transparent text-white shadow-sm align-middle hover:bg-gray-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm " onClick={() => logout()}>
                      <span>Logout</span>
                      <CgLogOut />

                    </button>
                  </li>
                  :
                  <>
                    <li>
                      <Link
                        to="/register"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-zinc-600 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Sign up
                      </Link>
                    </li>
                  </>
              }
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
                <div className="absolute top-0 left-0 w-full z-[99]">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >

                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            {/* <img className="w-44 rounded-xl" src={logo} alt="mainLogo" /> */}
                          </span>
                        </Link>
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
                          <Link
                            to="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Product
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Features
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-blue-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </Link>
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




    </div>
  );
};

export default Navbar;