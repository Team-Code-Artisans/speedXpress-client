import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getParcels } from "../../../../API Operations/manageParcels";
import { AuthContext } from "../../../../contexts/AuthProvider";
import RegularAllDelivery from "./RegularAllDelivery";
import RegularCompleteDeliveries from "./RegularCompleteDeliveries";
import RegularPendingDelivery from "./RegularPendingDelivery";
import SubRouteTab from "./SubRouteTab";

const RegularUserDeliveries = () => {
  const { user } = useContext(AuthContext);

  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState(1);
  const [filterData, setFilterData] = useState([]);

  const {
    data: allParcels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allParcels"],
    queryFn: () => getParcels(user?.email),
  });

  useEffect(() => {
    const result = allParcels?.filter(parcel => {
      const filter = parcel?._id?.toLowerCase()?.match(search?.toLowerCase()) || parcel?.customerInfo.email?.toLowerCase()?.match(search?.toLowerCase()) ||
        parcel?.customerInfo.name?.toLowerCase()?.match(search?.toLowerCase()) ||
        parcel?.customerInfo.number?.toLowerCase()?.match(search?.toLowerCase())
      return filter;
    });
    setFilterData(result);
  }, [allParcels, search]);

  // filtered data here
  const pendingDeliveries = filterData.filter(delivery => delivery.status === 'pending')
  const completedDeliveries = filterData.filter(delivery => delivery.status === 'complete')

  const handleCopy = () => {
    toast.success("Copied Successfully");
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div className="my-10">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
          All <span className="text-blue-600">Deliveries</span>
        </h1>

        <div className="mt-2">
          <span className="inline-block w-20 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>

      <div className="bg-white rounded-md w-full">
        <div className=" lg:flex items-center justify-between pb-6">
          <div>
            <SubRouteTab
              setActiveStatus={setActiveStatus}
              activeStatus={activeStatus}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-100 items-center p-2 rounded-md border w-60 lg:w-96">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-100 outline-none ml-3 block w-full "
                type="text"
                name="search"
                id="search"
                placeholder="Search By Parcel ID, Name, Email, Number"
              />
            </div>
            <div className="lg:ml-5 ml-5 space-x-8">
              <button type="submit" className="bg-blue-600 hover:bg-blue-800 active:bg-gray-800 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer text-base">
                Search
              </button>
            </div>
          </div>
        </div>

        {activeStatus === 1 && <RegularAllDelivery isLoading={isLoading} filterData={filterData} handleCopy={handleCopy} refetch={refetch} />}
        {activeStatus === 2 && <RegularPendingDelivery isLoading={isLoading} filterData={pendingDeliveries} handleCopy={handleCopy} />}
        {activeStatus === 3 && <RegularCompleteDeliveries isLoading={isLoading} filterData={completedDeliveries} handleCopy={handleCopy} />}
      </div>
    </div>
  );
};

export default RegularUserDeliveries;
