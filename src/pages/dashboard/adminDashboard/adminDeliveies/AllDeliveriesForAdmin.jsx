import CopyToClipboard from "react-copy-to-clipboard";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import { AiOutlineCopy, AiOutlineDelete } from 'react-icons/ai';
import { GrStatusGood } from 'react-icons/gr';

import { updateStatus } from "../../../../API Operations/manageAdminDeliveries";
import { deleteData } from "../../../../API Operations/manageUsers";
import BigSpinner from "../../../../components/Spinners/BigSpinner";

const AllDeliveriesForAdmin = ({ isLoading, filterData, handleCopy, refetch }) => {

    const columns = [
        {
            name: "DATE & TIME",
            selector: (row) => (
                <>
                    <div>
                        <p className="text-gray-900 whitespace-no-wrap">
                            {row.date} <br /> {row.time}
                        </p>
                    </div>
                </>
            ),
            sortable: true,
        },
        {
            name: "INVOICE ID",
            selector: (row) => (
                <>
                    <CopyToClipboard onCopy={handleCopy} text={row._id}>
                        <p>ID: <span className="text-orange-600 pr-2">{row._id.slice(0, 8)}</span><AiOutlineCopy className="inline" /></p>
                    </CopyToClipboard>
                </>
            ),
            sortable: true
        },
        {
            name: "CUSTOMER INFO",
            selector: (row) => (
                <>
                    {
                        <div className="space-y-1 py-2 text-sm">
                            <p>
                                {row.customerInfo?.name}
                            </p>
                            <p>
                                {row.customerInfo?.email}
                            </p>
                            <p>
                                {row.customerInfo?.number}
                            </p>
                        </div>
                    }
                </>
            ),
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
                                {row.customerInfo?.division}
                            </p>
                            <p>
                                {row.customerInfo?.district}
                            </p>
                            <p>
                                {row.customerInfo?.address}
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
        // {
        //     name: "SHOP INFO",
        //     selector: (row) => (
        //         <>
        //             {
        //                 <div className="space-y-1 py-2 text-sm">
        //                     <p>
        //                         {row.customerInfo.merchantName}
        //                     </p>
        //                     <p>
        //                         {row.customerInfo.merhantEmail}
        //                     </p>
        //                 </div>
        //             }
        //         </>
        //     )
        // },

        {
            name: "PAYMENT",
            selector: (row, index) => (
                <>
                    {

                        <div className="-ml-5 p-2">
                            {!row.paid ?
                                <p className="text-rose-500 px-4 py-2 rounded-full text-center font-medium" aria-disabled>
                                    UNPAID ❌
                                </p>

                                : <p className="text-emerald-500 px-4 py-2 rounded-full text-center font-medium" aria-disabled>
                                    PAID ✔
                                </p>

                            }

                        </div>
                    }
                </>
            ),
        },
        {
            name: "STATUS",
            selector: (row) => (
                <>
                    {
                        <div className="-ml-5 p-2">
                            <p className={`${row?.status === "complete" && 'text-emerald-500'} ${row?.status === "pending" && 'text-amber-600'}
                            ${row?.status === "accepted" && 'text-green-600'} px-4 py-2 rounded-full text-center font-bold`}>
                                {row?.status === "accepted" ? "approved" : row?.status}
                            </p>
                        </div>
                    }
                </>
            ),
        },
        {
            name: "ACTION",
            selector: (row) => (
                <>
                    {
                        <div className="flex justify-center items-center gap-2.5">
                            {
                                row?.status === "pending" && row?.paid ?
                                    <button className={`  rounded-full text-center font-medium text-sm bg-emerald-500  text-white`}
                                        onClick={() => handleChangStatus(row._id)}>
                                        <GrStatusGood size={20} className="text-slate-100" />
                                    </button>
                                    :
                                    <></>
                            }
                            <button onClick={()=>handleDelete(row?._id)}>
                                <AiOutlineDelete size={20} color="red" />
                            </button>
                        </div>
                    }
                </>
            ),
        },
    ];


    const handleChangStatus = (id) => {
        console.log(id);
        const updatedStatus = "accepted";
        updateStatus(id, updatedStatus)
            .then((result) => {
                refetch();
                toast.success("Parcel delivery accepted by system");
                console.log(result);
            })
            .catch((err) => {
                // setLoading(false);
                console.log(err.message);
            });
    };

    const handleDelete = (id) => {
        console.log("deleteing", id)
        let context="parcel"
        if (confirm("Are you sure to delete data")) {
            deleteData(id,context).then(data => {
                if (data?.success) {
                    toast.success(data?.message)
                    console.log(data?.message)
                    refetch()
                }
            })
                .catch(err => {
                    toast.error(err.message)
                })
        }
    }



    return (
        <DataTable
            columns={columns}
            data={filterData}
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
            progressComponent={<BigSpinner />}
            customStyles={styles}
        />
    );
};

export default AllDeliveriesForAdmin;

const styles = {
    rows: {
        style: {
            fontSize: '1rem'
        },
    },
    headRow: {
        style: {
            backgroundColor: '#fed7aa',


        },
    },
};
