import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import { AiOutlineCopy, AiOutlineDelete } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import { RiArrowGoBackFill } from "react-icons/ri";
import { updateStatus } from "../../../../API Operations/manageAdminDeliveries";
import { getIntransitParcels } from "../../../../API Operations/manageParcels";
import BigSpinner from "../../../../components/Spinners/BigSpinner";
import { AuthContext } from "../../../../contexts/AuthProvider";


const InTransitDeliveries = ({ handleCopy ,employeeDistrict}) => {
    const { user } = useContext(AuthContext)

    const {
        data: inTrasitParcels = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: [employeeDistrict],
        queryFn: () => getIntransitParcels(employeeDistrict.length && employeeDistrict),
    });

    console.log(inTrasitParcels, employeeDistrict);

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
                                <span className="font-bold text-green-800">{row.deliveryFee}</span>
                            </p>
                            <p>
                                Total Charge: { }
                                <span className="font-bold text-teal-600"> {row.TotalchargeAmount}</span>

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
                            <p className="text-orange-700 bg-orange-100 px-3 py-2 rounded-full font-semibold text-xs font-medium " title= {row.status}>
                                {row.status}
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
                                row?.status === "in-transit" && row?.paid ?
                                    <button className={`  rounded-full text-center font-medium text-sm bg-emerald-500  text-white`}
                                        onClick={() => handleChangStatus(row._id,"complete")}  title="Complete the delivery">
                                        <GrStatusGood size={20} className="text-slate-100" />
                                    </button>
                                    :
                                    <></>
                            }
                            <button  title="Delete"><AiOutlineDelete size={20} color="red" /></button>
                            <button  title="return"><RiArrowGoBackFill size={20} className="text-orange-700" onClick={() => handleChangStatus(row._id,"return")}/></button>
                        </div>

                    }
                </>
            ),
        },

    ];

    const handleChangStatus = (id,updatedStatus) => {
        console.log(id,updateStatus);
        // complete by delivery man
        // const updatedStatus = "complete";
        updateStatus(id, updatedStatus)
            .then((result) => {
                refetch();
                toast.success(`Parcel  successfully  delivered by ${user?.displayName} `);
                console.log(result);
            })
            .catch((err) => {
                // setLoading(false);
                console.log(err.message);
            });
    };

    return (
        <div>
            <DataTable
                columns={columns}
                data={inTrasitParcels}
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
        </div>
    )
}

const styles = {
    rows: {
        style: {
            fontSize: '1rem'
        },
    },
    headRow: {
        style: {
            backgroundColor: '#fed7aa'
        },
    },
};


export default InTransitDeliveries
