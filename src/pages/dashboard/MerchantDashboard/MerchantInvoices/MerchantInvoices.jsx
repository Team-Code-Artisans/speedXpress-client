import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { getParcels } from '../../../../API Operations/manageParcels';
import { toast } from 'react-hot-toast';
import MerchantInvoiceTable from './MerchantInvoiceTable';
import MyDocument from './Document';

const MerchantInvoices = () => {

    const { user } = useContext(AuthContext);

    const [search, setSearch] = useState("");
    const [filterData, setFilterData] = useState([]);

    const {
        data: allParcels = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allParcels"],
        queryFn: () => getParcels(user?.email),
    });

    console.log(allParcels);
    // filtered data here
    const pendingDeliveries = filterData.filter(delivery => delivery.status === 'pending')
    const completedDeliveries = filterData.filter(delivery => delivery.status === 'complete')
    console.log(pendingDeliveries)


    useEffect(() => {
        const result = allParcels?.filter(parcel => {
            const filter = parcel?._id?.toLowerCase()?.match(search?.toLowerCase()) || parcel?.customerInfo.email?.toLowerCase()?.match(search?.toLowerCase()) ||
                parcel?.customerInfo.name?.toLowerCase()?.match(search?.toLowerCase()) ||
                parcel?.customerInfo.number?.toLowerCase()?.match(search?.toLowerCase())
            return filter;
        });
        setFilterData(result);
    }, [allParcels, search]);

    const handleCopy = () => {
        toast.success("Copied Successfully");
    };

    return (
        <div className="max-w-screen-2xl mx-auto px-4">
            <div className="my-10">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                    All <span className="text-orange-600">Invoices</span>
                </h1>

                <div className="mt-2">
                    <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
                </div>
            </div>

            <MyDocument />

            <MerchantInvoiceTable isLoading={isLoading} filterData={filterData} handleCopy={handleCopy} refetch={refetch} />

        </div>
    )
}

export default MerchantInvoices