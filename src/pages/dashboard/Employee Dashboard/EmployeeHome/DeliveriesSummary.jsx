import { BsBox, BsBoxArrowInRight, BsBoxSeam } from "react-icons/bs";

const DeliverySummary = ({
  totalPendingDeliveries,
  totalCompletedDeliveries,
  totalReturnDeliveries,
}) => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white pb-4">
        Order Summary
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <div className=" space-y-4 rounded-xl bg-green-100 p-2 md:p-4 shadow-xl">
          <div className="bg-green-200 rounded-2xl p-2 inline-block shadow-xl">
            <BsBoxSeam size={"2rem"} className="text-green-600" />
          </div>

          <h3 className="text-xl font-semibold sm:text-2xl text-black">
            Total Delivered
          </h3>

          <p className="text-lg text-gray-600 ">
            <span className=" text-2xl font-semibold pr-2">
              {totalPendingDeliveries}
            </span>
            packages
          </p>
        </div>
        <div className=" space-y-4 rounded-xl bg-orange-100 p-2 md:p-4 shadow-xl">
          <div className="bg-orange-200 rounded-2xl p-2 inline-block shadow-xl">
            <BsBox size={"2rem"} className=" text-orange-600" />
          </div>

          <h3 className="text-xl font-semibold sm:text-2xl text-black">
            Pending Delivery
          </h3>

          <p className="text-lg text-gray-600 ">
            <span className=" text-2xl font-semibold pr-2">
              {totalCompletedDeliveries}
            </span>
            packages
          </p>
        </div>
        <div className=" space-y-4 rounded-xl bg-blue-100 p-2 md:p-4 shadow-xl">
          <div className="bg-blue-200 rounded-2xl p-2 inline-block shadow-xl">
            <BsBoxArrowInRight size={"2rem"} className="text-blue-600" />
          </div>

          <h3 className="text-xl font-semibold sm:text-2xl text-black">
            Total Returned
          </h3>

          <p className="text-lg text-gray-600 ">
            <span className=" text-2xl font-semibold pr-2">
              {totalReturnDeliveries}
            </span>
            packages
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliverySummary;
