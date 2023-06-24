import { useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import { AiOutlineCopy, AiOutlineDelete } from 'react-icons/ai';
import { GrStatusGood } from "react-icons/gr";
import { updateStatus } from "../../../../API Operations/manageAdminDeliveries";
import BigSpinner from "../../../../components/Spinners/BigSpinner";
import { AuthContext } from "../../../../contexts/AuthProvider";

const PendingDeliveries = ({ isLoading, filterData, handleCopy, refetch }) => {
    const { user } = useContext(AuthContext)
    const columns = [
        {
            name: "DATE & TIME",
            selector: (row) => (
                <>
                    <div>
                        <p className="text-gray-900 whitespace-no-wrap">
                            {row?.date} <br /> {row?.time}
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
                        <p>ID: <span className="text-blue-600 pr-2">{row._id.slice(0, 8)}</span><AiOutlineCopy className="inline" /></p>
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
                                <span className="font-bold text-blue-600">{row.deliveryFee}</span>
                            </p>
                            <p>
                                Total Charge: { }
                                <span className="font-bold text-blue-600"> {row.TotalchargeAmount}</span>

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
                                {row.customerInfo?.merchantName ? row.customerInfo?.merchantName : "from a reguler user"}
                            </p>
                            <p>
                                {row.customerInfo?.merchantEmail}
                            </p>
                        </div>
                    }
                </>
            )
        },
        {
            name: "STATUS",
            selector: (row) => (
                <>
                    {
                        <div>
                            <p className="text-blue-700 bg-blue-100 px-3 py-2 rounded-full font-semibold text-xs" title={row.status === "accepted" && "Approved by the system to delivery"}>
                                {row.status === "accepted" && "Approved"}
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
                        <div className="flex justify-center items-center gap-5">
                            {
                                row?.status === "accepted" && row?.paid ?
                                    <button className={`rounded-full text-center font-medium text-sm bg-blue-500 text-white px-4 py-2`}
                                        onClick={() => handleChangStatus(row._id)} title="Accept For Delivery">
                                        Accept
                                        {/* <GrStatusGood size={20} className="text-slate-100" /> */}
                                    </button>
                                    :
                                    <></>
                            }
                            {/* <AiOutlineDelete size={20} /> */}
                        </div>
                    }
                </>
            ),
        },

    ];

    const handleChangStatus = (id) => {
        const updatedStatus = "in-transit";
        updateStatus(id, updatedStatus)
            .then((result) => {
                refetch();
                toast.success(`Parcel delivery accepted by ${user?.displayName} `);
                console.log(result);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    if (isLoading) return <BigSpinner />
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

export default PendingDeliveries;

const styles = {
    rows: {
        style: {
            fontSize: '1rem'
        },
    },
    headRow: {
        style: {
            backgroundColor: '#93c5fd'
        },
    },
};
