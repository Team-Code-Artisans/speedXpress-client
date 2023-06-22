import {
  BsArrowReturnLeft,
  BsBox,
  BsBoxArrowInRight,
  BsBoxSeam,
} from "react-icons/bs";

const Stats = ({
  totalPendingDeliveries,
  totalInTransitDeliveries,
  totalCompletedDeliveries,
  totalReturnDeliveries,
}) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-8 px-2">
      <div className=" space-y-4 rounded-xl bg-orange-100 p-2 md:p-4 shadow-xl">
        <div className="bg-orange-200 rounded-2xl p-2 inline-block shadow-xl">
          <BsBox size={"2rem"} className=" text-orange-600" />
        </div>

        <h3 className="text-xl font-semibold sm:text-2xl text-black">
          Pending Deliveries
        </h3>

        <p className="text-lg text-gray-600 ">
          <span className=" text-2xl font-semibold pr-2">
            {totalPendingDeliveries}
          </span>
          packages
        </p>
      </div>
      <div className=" space-y-4 rounded-xl bg-green-100 p-2 md:p-4 shadow-xl">
        <div className="bg-green-200 rounded-2xl p-2 inline-block shadow-xl">
          <BsBoxArrowInRight size={"2rem"} className="text-green-600" />
        </div>

        <h3 className="text-xl font-semibold sm:text-2xl text-black">
          In-Transit Deliveries
        </h3>

        <p className="text-lg text-gray-600 ">
          <span className=" text-2xl font-semibold pr-2">
            {totalInTransitDeliveries}
          </span>
          packages
        </p>
      </div>
      <div className=" space-y-4 rounded-xl bg-amber-100 p-2 md:p-4 shadow-xl">
        <div className="bg-amber-200 rounded-2xl p-2 inline-block shadow-xl">
          <BsArrowReturnLeft size={"2rem"} className="text-amber-600" />
        </div>

        <h3 className="text-xl font-semibold sm:text-2xl text-black">
          Return Deliveries
        </h3>

        <p className="text-lg text-gray-600 ">
          <span className=" text-2xl font-semibold pr-2">
            {totalReturnDeliveries}
          </span>
          packages
        </p>
      </div>
      <div className=" space-y-4 rounded-xl bg-blue-100 p-2 md:p-4 shadow-xl">
        <div className="bg-blue-200 rounded-2xl p-2 inline-block shadow-xl">
          <BsBoxSeam size={"2rem"} className="text-blue-600" />
        </div>

        <h3 className="text-xl font-semibold sm:text-2xl text-black">
          Complete Delivery
        </h3>

        <p className="text-lg text-gray-600 ">
          <span className=" text-2xl font-semibold pr-2">
            {totalCompletedDeliveries}
          </span>
          packages
        </p>
      </div>
    </div>
  );
};

export default Stats;
