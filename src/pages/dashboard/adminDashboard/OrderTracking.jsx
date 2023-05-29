// const order = [
//   {
//     order_id: "123456789",
//     customer_name: "John Smith",
//     delivery_address: "123 Main Street, Cityville",
//     items: [
//       {
//         item_name: "Product A",
//         quantity: 2,
//         price: 10.99,
//       },
//       {
//         item_name: "Product B",
//         quantity: 1,
//         price: 24.99,
//       },
//     ],
//     total_amount: 46.97,
//     status: "Pending",
//   },
//   {
//     order_id: "987654321",
//     customer_name: "Jane Doe",
//     delivery_address: "456 Elm Street, Townsville",
//     items: [
//       {
//         item_name: "Product C",
//         quantity: 3,
//         price: 7.99,
//       },
//       {
//         item_name: "Product D",
//         quantity: 1,
//         price: 12.99,
//       },
//       {
//         item_name: "Product E",
//         quantity: 2,
//         price: 19.99,
//       },
//     ],
//     total_amount: 81.93,
//     status: "Shipped",
//   },
//   {
//     order_id: "456789123",
//     customer_name: "Sarah Johnson",
//     delivery_address: "789 Oak Avenue, Villagetown",
//     items: [
//       {
//         item_name: "Product F",
//         quantity: 1,
//         price: 14.99,
//       },
//     ],
//     total_amount: 14.99,
//     status: "Delivered",
//   },
//   {
//     order_id: "654321987",
//     customer_name: "Michael Brown",
//     delivery_address: "321 Pine Street, Hamletville",
//     items: [
//       {
//         item_name: "Product G",
//         quantity: 5,
//         price: 9.99,
//       },
//       {
//         item_name: "Product H",
//         quantity: 3,
//         price: 5.99,
//       },
//     ],
//     total_amount: 67.92,
//     status: "Pending",
//   },
//   {
//     order_id: "789123456",
//     customer_name: "Emily Davis",
//     delivery_address: "567 Cedar Road, Countryside",
//     items: [
//       {
//         item_name: "Product I",
//         quantity: 1,
//         price: 29.99,
//       },
//       {
//         item_name: "Product J",
//         quantity: 2,
//         price: 8.99,
//       },
//       {
//         item_name: "Product K",
//         quantity: 4,
//         price: 3.99,
//       },
//     ],
//     total_amount: 72.91,
//     status: "Shipped",
//   },
// ];
import trackingImg from "../../../Assets/tracking.png";

const OrderTracking = () => {
  return (
    <div>
      <section className="bg-gray-100 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={trackingImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-4xl lg:text-5xl mb-4 font-bold ">
              Effortless <span className="text-amber-400">Parcel Tracking</span>{" "}
              for Your Peace of Mind
            </h1>
            <p className="mb-8 leading-relaxed text-sm lg:text-base">
              Track your parcel hassle-free with our intuitive system. Stay
              updated on its whereabouts and enjoy peace of mind. Enter your
              unique tracking number for instant access to real-time status.
              Know the current location and expected delivery time. Our reliable
              logistics network ensures safe handling and timely delivery.
              Monitor your packages progress effortlessly. Experience
              convenience and stay informed throughout the entire journey. Trust
              us for efficient and stress-free shipping. Start tracking your
              parcel today and enjoy a worry-free shipping experience.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm font-medium text-gray-700"
                >
                  Enter Your Parcel ID
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-50 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:bg-transparent focus:border-gray-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-amber-400 border-0 py-2 px-6 focus:outline-none hover:bg-amber-500 rounded text-lg">
                Button
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Track Your Parcel with Ease.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="p-4 max-w-screen-2xl mx-auto">
          <div className="h-full bg-gray-100 bg-opacity-40 px-8 pt-9 pb-24 rounded-lg overflow-hidden text-center relative">
            <div className="flex justify-around text-lg font-medium">
              <h2 className="">Parcel ID:</h2>
              <h2 className="">Delivered by:</h2>
            </div>
            <hr />

            <div className="max-w-5xl mx-auto mt-20">
              <h2 className="sr-only">Steps</h2>

              <div>
                <div className="overflow-hidden rounded-full bg-gray-200">
                  <div className="h-2 w-1/2 rounded-full bg-amber-400"></div>
                </div>

                <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
                  <li className="flex items-center justify-start text-amber-400 sm:gap-1.5">
                    <span className="hidden sm:inline"> Pending </span>

                    <svg
                      className="h-6 w-6 sm:h-5 sm:w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>
                  </li>

                  <li className="flex items-center justify-center text-amber-400 sm:gap-1.5">
                    <span className="hidden sm:inline"> On The Way </span>

                    <svg
                      className="h-6 w-6 sm:h-5 sm:w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </li>

                  <li className="flex items-center justify-end sm:gap-1.5">
                    <span className="hidden sm:inline"> Delivered </span>

                    <svg
                      className="h-6 w-6 sm:h-5 sm:w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </li>
                </ol>
              </div>
            </div>

            <h1 className="title-font sm:text-2xl text-xl font-medium text-black mt-10">
              Details: Raclette Blueberry Nextious Level
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            {/* <a className="text-indigo-400 inline-flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div> */}
          </div>
        </div>
      </section>

      {/* <section className="text-gray-400 bg-gray-200 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                  Raclette Blueberry Nextious Level
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a className="text-indigo-400 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                  Ennui Snackwave Thundercats
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a className="text-indigo-400 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                  Selvage Poke Waistcoat Godard
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a className="text-indigo-400 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default OrderTracking;
