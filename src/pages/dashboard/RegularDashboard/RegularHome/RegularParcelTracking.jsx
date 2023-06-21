import { useRef, useState } from "react";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPendingActions } from "react-icons/md";
import { BsHouseCheck } from "react-icons/bs";
import { getSingleParcel } from "../../../../API Operations/manageParcels";
import trackingImg from "../../../../Assets/tracking.png";

const RegularParcelTracking = () => {
  const inputTrackingID = useRef(null)

  const [trackProduct,setTrackProduct] = useState(null)


  const handleTrackFunction = ()=>{
    const parcelID = inputTrackingID.current.value;
      console.log(parcelID);

      getSingleParcel(parcelID)
      .then(res => setTrackProduct(res))
  }

console.log(trackProduct);
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
              Effortless <span className="text-amber-400">Tracking </span>
             Your Shipment
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


            {/* take parcel ID by input field  */}

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
                  name="trackingID"
                  ref={inputTrackingID}
                  placeholder="Track your parcel by ID"
                  className="w-full bg-gray-50 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:bg-transparent focus:border-gray-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button onClick={handleTrackFunction}  className="inline-flex text-white bg-amber-400 border-0 py-2 px-6 focus:outline-none hover:bg-amber-500 rounded text-lg">
                Track
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Track Your Parcel with Ease.
            </p>
          </div>
        </div>
      </section>




{/* information show ing  section  */}

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


                {/* progress bar here */}

            {/* just order not yet paid .... */}
              {
                  trackProduct?.status=="pending" &&

                  <div className="overflow-hidden rounded-full bg-zinc-500">
                  <div className="h-3 w-8 rounded-full bg-amber-400"></div>
                  </div>
              }


            {/* accepted so this order is now in ware house */}
              {
                  trackProduct?.status=="accepted" && 
                  
                  <div className="overflow-hidden rounded-full bg-zinc-500">
                  <div className="h-3 w-1/4 rounded-full bg-amber-400"></div>
                  </div>
              }
               {/* accepted so this order is now on the way  */}
              {
                  trackProduct?.status=="in-transit" && 
                  
                  <div className="overflow-hidden rounded-full bg-zinc-500">
                  <div className="h-3 w-1/2 rounded-full bg-amber-400"></div>
                  </div>
              }

              {/* this product is now delevered  */}
              {
                  trackProduct?.status=="complete" &&

                  <div className="overflow-hidden rounded-full bg-zinc-500">
                  <div className="h-3 w-3/4 rounded-full bg-amber-400"></div>
                  </div>
              }

              {/* this product into delevery problem so its return  */}
              {
                  trackProduct?.status=="return" &&

                  <div className="overflow-hidden rounded-full bg-zinc-500">
                  <div className="h-3 w-full rounded-full bg-amber-400"></div>
                  </div>
              }
              {
                  trackProduct == null &&

                  <div className=" h-2 overflow-hidden rounded-full bg-stone-200">
                  
                  </div>
              }
             
               


                {/* list of status here */}
                <ol className="mt-4 grid grid-cols-5 text-sm font-medium text-gray-500">
                  <li className="flex items-center justify-start text-amber-400 sm:gap-1.5">
                    <span className="hidden sm:inline"> Pending </span>
                    <MdPendingActions className="text-xl" />
                  </li>

                  <li className="flex items-center justify-center text-amber-400 sm:gap-1.5">
                    <span className="hidden sm:inline"> In warehouse </span>
                    <BsHouseCheck className="text-xl" />
                  </li>
                  <li className="flex items-center justify-center text-amber-400 sm:gap-1.5">
                    <span className="hidden sm:inline"> On The Way </span>
                    <HiOutlineLocationMarker className="text-xl" />
                  </li>

                  <li className="flex items-center justify-end sm:gap-1.5">
                    <span className="hidden sm:inline"> Delivered </span>
                    <AiOutlineDeliveredProcedure className="text-xl" />
                  </li>

                  <li className="flex items-center justify-end sm:gap-1.5">
                    <span className="hidden sm:inline"> Return </span>
                    <AiOutlineDeliveredProcedure className="text-xl" />
                  </li>
                </ol>
              </div>
            </div>

            <h1 className="title-font sm:text-2xl text-xl font-medium text-black my-10">
              Parcel Details
            </h1>
            <div className="flex justify-between text-start font-medium">
              <div className="w-1/2">
                <div className="flex">
                  <p className="mb-2 mr-3 text-amber-500">Name:</p>
                  <p>{trackProduct?.customerInfo?.name}</p>
                </div>
                <div className="flex">
                  <p className="mb-2 mr-3 text-amber-500">Location:</p>
                  <p>anywhere</p>
                </div>
                <div className="flex">
                  <p className="mb-2 mr-3 text-amber-500">Payment:</p>
                  <p>{trackProduct?.deliveryFee}</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex">
                  <p className="mb-2 mr-3 text-amber-500">Delivery Time:</p>
                  <p>anytime</p>
                </div>
                <div className="flex">
                  <p className="mb-2 mr-3 text-amber-500">Delivery Location:</p>
                  <p>{trackProduct?.customerInfo?.district}</p>
                </div>
                <div className="flex">
                  <p className="mr-3 text-amber-500">Delivery Man: </p>
                  <p>anybody</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegularParcelTracking;
