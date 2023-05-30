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
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPendingActions } from "react-icons/md";
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
                Track
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
                    <MdPendingActions className="text-xl"/>
                  </li>

                  <li className="flex items-center justify-center text-amber-400 sm:gap-1.5">
                    <span className="hidden sm:inline"> On The Way </span>
                    <HiOutlineLocationMarker className="text-xl"/>
                  </li>

                  <li className="flex items-center justify-end sm:gap-1.5">
                    <span className="hidden sm:inline"> Delivered </span>
                    <AiOutlineDeliveredProcedure className="text-xl"/>
                  </li>
                </ol>
              </div>
            </div>

            <h1 className="title-font sm:text-2xl text-xl font-medium text-black my-10">
              Parcel Details
            </h1>
            <div className="flex justify-between text-start font-medium">
              <div className="w-1/2">
                <p className="mb-2">Name:</p>
                <p className="mb-2">Location:</p>
                <p className="mb-2">Payment:</p>
              </div>
              <div className="w-1/2">
                <p className="mb-2">Delivery Time:</p>
                <p className="mb-2">Delivery Location:</p>
                <p>Delivery Man: </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderTracking;
