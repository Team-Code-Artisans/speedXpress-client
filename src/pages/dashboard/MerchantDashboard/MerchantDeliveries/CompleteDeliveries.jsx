import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { LoaderIcon } from "react-hot-toast";
import { getParcels } from "../../../../API Operations/manageParcels";
import { AuthContext } from "../../../../contexts/AuthProvider";

const CompleteDeliveries = () => {

    const { user } = useContext(AuthContext);
    const [search, setSearch] = useState("");
    // const [filterUser, setFilterUser] = useState([]);

    const {
        data: allParcels = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allParcels"],
        queryFn: () => getParcels(user?.email),
    });

    console.log(allParcels)

    // useEffect(() => {
    //     const result = allParcels?.filter(user => {
    //         return user?.email?.toLowerCase()?.match(search?.toLowerCase());
    //     });
    //     setFilterUser(result);
    // }, [allParcels, search]);

    const columns = [
        // {
        //     name: "DATE & TIME",
        //     selector: (row) => row.date,
        //     sortable: true,
        // },
        {
            name: "INVOICE ID",
            selector: (row) => row._id.slice(0, 8),
        },
        {
            name: "CUSTOMER INFO",
            selector: (row) => (
                <>
                    {
                        <div className="space-y-1 py-2 text-sm">
                            <p>
                                {row.customerInfo.name}
                            </p>
                            <p>
                                {row.customerInfo.email}
                            </p>
                            <p>
                                {row.customerInfo.number}
                            </p>
                        </div>
                    }
                </>
            )
        },
        {
            name: "PARCEL INFO",
            selector: (row) => row.weight,
        },
        {
            name: "CUSTOMER ADDRESS",
            selector: (row) => (
                <>
                    {
                        <div className="space-y-1 py-2 text-sm">
                            <p>
                                {row.customerInfo.division}
                            </p>
                            <p>
                                {row.customerInfo.district}
                            </p>
                            <p>
                                {row.customerInfo.address}
                            </p>
                        </div>
                    }
                </>
            )
        },
        {
            name: "PAYMENT INFO",
            selector: (row) => (
                <>
                    {
                        <div className="space-y-1 py-2 text-sm">
                            <p>
                                Delivery Fee: { }
                                {row.deliveryFee}
                            </p>
                            <p>
                                Total Charge: { }
                                {row.TotalchargeAmount}
                            </p>
                        </div>
                    }
                </>
            )
        },
        {
            name: "SHOP INFO",
            selector: (row) => (
                <>
                    {
                        <div className="space-y-1 py-2 text-sm">
                            <p>
                                {row.customerInfo.customerOwnerName}
                            </p>
                            <p>
                                {row.customerInfo.customerOwnerEmail}
                            </p>
                        </div>
                    }
                </>
            )
        },
        // {
        //     name: "STATUS",
        //     selector: (row) => row.status,
        // },
    ];


    return (
        <DataTable
            columns={columns}
            data={allParcels}
            direction="auto"
            fixedHeader
            fixedHeaderScrollHeight="600px"
            highlightOnHover
            noHeader
            pagination
            responsive
            striped
            pointerOnHover
            progressPending={isLoading}
            progressComponent={<LoaderIcon />}
        />
    );
};

export default CompleteDeliveries;