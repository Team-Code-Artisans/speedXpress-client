import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getDeliveryParcels } from "../../../../API Operations/manageParcels";
import { getAUser } from "../../../../API Operations/manageUsers";
import { InfoAlert } from "../../../../components/Info Alert/InfoAlert";
import BigSpinner from "../../../../components/Spinners/BigSpinner";
import { AuthContext } from "../../../../contexts/AuthProvider";
import CompleteDeliveries from "./CompletedDeliveries";
import InTransitDeliveries from "./InTransitDeliveries";
import PendingDeliveries from "./PendingDeliveries";
import { ReturnedDeliveries } from "./ReturnedDeliveries";
import Tabs from "./Tabs";

const EmployeeDeliveries = () => {
    const { user } = useContext(AuthContext);
    const [employeeDistrict, setEmployeeDistrict] = useState("")
    const [activeStatus, setActiveStatus] = useState(2);
    const [search, setSearch] = useState("");
    const [filterData, setFilterData] = useState([]);
    const [loader, setLoader] = useState(false)
    const [deliveryParcels, setDeliveryParcels] = useState([]);
    const [show, setShow] = useState(true);
    useEffect(() => {
        getAUser(user?.email)
            .then((data) => {
                setLoader(true);
                setEmployeeDistrict(data?.district);
                setLoader(false);
            })
            .catch((err) => {
                console.log(err);
                setLoader(false);
            });
    }, [user]);

    const {
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["deliveryParcels"],
        queryFn: () => getDeliveryParcels(employeeDistrict),
        enabled: !loader && employeeDistrict?.length > 0,
        onSuccess: (data) => {
            setDeliveryParcels(data);
        },
    });

    useEffect(() => {
        const result = deliveryParcels?.filter((parcel) => {
            const filter =
                parcel?._id?.toLowerCase()?.match(search?.toLowerCase()) ||
                parcel?.customerInfo.email?.toLowerCase()?.match(search?.toLowerCase()) ||
                parcel?.customerInfo.name?.toLowerCase()?.match(search?.toLowerCase()) ||
                parcel?.customerInfo.number?.toLowerCase()?.match(search?.toLowerCase());
            return filter;
        });
        setFilterData(result);
    }, [search, deliveryParcels]);

    const handleCopy = () => {
        toast.success("Copied Successfully");
    };

    if (loader || isLoading || deliveryParcels.length === 0) {
        return <BigSpinner />;
    }

    return (
        <div className="max-w-screen-2xl mx-auto px-4">
            <div className="my-6 flex justify-between">
                <div >
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                        All <span className="text-orange-600">Deliveries</span>
                    </h1>

                    <div className="mt-2">
                        <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
                    </div>
                </div>
                <InfoAlert message={`All approved deliveries by system of your area is here.\nAccept to delivery`} show={show} setShow={setShow}></InfoAlert>
            </div>



            <div className="bg-white rounded-md w-full">
                <div className=" lg:flex items-center justify-between pb-6">
                    <div>
                        <Tabs
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
                            <button type="submit" className="bg-orange-600 hover:bg-orange-800 active:bg-gray-800 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer text-base">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {activeStatus === 2 && <PendingDeliveries isLoading={isLoading} filterData={filterData} handleCopy={handleCopy} refetch={refetch} />}
                {activeStatus === 4 && <InTransitDeliveries isLoading={isLoading} employeeDistrict={employeeDistrict} handleCopy={handleCopy} />}
                {activeStatus === 3 && <CompleteDeliveries isLoading={isLoading} handleCopy={handleCopy} employeeDistrict={employeeDistrict} />}
                {activeStatus === 5 && <ReturnedDeliveries isLoading={isLoading} handleCopy={handleCopy} employeeDistrict={employeeDistrict} />}
            </div>
        </div>
    );
};

export default EmployeeDeliveries;
