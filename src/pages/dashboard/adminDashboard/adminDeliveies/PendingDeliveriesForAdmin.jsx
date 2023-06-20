import CopyToClipboard from "react-copy-to-clipboard";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import { AiOutlineCopy } from "react-icons/ai";
import { updateStatus } from "../../../../API Operations/manageAdminDeliveries";
import BigSpinner from "../../../../components/Spinners/BigSpinner";

const PendingDeliveriesForAdmin = ({
  isLoading,
  filterData,
  handleCopy,
  refetch,
}) => {
  const handleAction = (data) => {
    console.log(data);
    const updatedStatus = "accepted";
    updateStatus(data._id, updatedStatus)
      .then((result) => {
        if (result.modifiedCount === 1) {
          toast.success("status updated successfully");
          refetch();
          console.log(result);
        } else {
          toast.error("status update failed");
        }
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err.message);
      });
  };

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
            <p>
              ID:{" "}
              <span className="text-orange-600 pr-2">
                {row._id.slice(0, 8)}
              </span>
              <AiOutlineCopy className="inline" />
            </p>
          </CopyToClipboard>
        </>
      ),
      sortable: true,
    },
    {
      name: "CUSTOMER INFO",
      selector: (row) => (
        <>
          {
            <div className="space-y-1 py-2 text-sm">
              <p>{row.customerInfo.name}</p>
              <p>{row.customerInfo.email}</p>
              <p>{row.customerInfo.number}</p>
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
              <p>{row.customerInfo.division}</p>
              <p>{row.customerInfo.district}</p>
              <p>{row.customerInfo.address}</p>
            </div>
          }
        </>
      ),
    },
    {
      name: "PAYMENT INFO",
      selector: (row) => (
        <>
          {
            <div className="space-y-1 py-2 text-sm">
              <p>
                Delivery Fee: {}
                {row.deliveryFee}
              </p>
              <p>
                Total Charge: {}
                {row.TotalchargeAmount}
              </p>
            </div>
          }
        </>
      ),
    },
    {
      name: "SHOP INFO",
      selector: (row) => (
        <>
          {
            <div className="space-y-1 py-2 text-sm">
              <p>{row.customerInfo?.merchantName}</p>
              <p>{row.customerInfo?.merchantEmail}</p>
            </div>
          }
        </>
      ),
    },
    // {
    //   name: "STATUS",
    //   selector: (row) => (
    //     <>
    //       {
    //         <div>
    //           <p className="text-lg text-orange-400">Pending</p>
    //         </div>
    //       }
    //     </>
    //   ),
    // },
    {
      name: "ACTION",
      selector: (row) => (
        <>
          {
            <div>
              <button
                onClick={() => handleAction(row)}
                className={`text-slate-50 ${
                  row.status == "accepted" ? "bg-green-400" : "bg-orange-400"
                } px-4 py-2 rounded-full text-center`}
              >
                {row.status == "accepted" ? "accepted" : "accept"}
              </button>
            </div>
          }
        </>
      ),
    },
  ];

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

export default PendingDeliveriesForAdmin;

const styles = {
  rows: {
    style: {
      fontSize: "1rem",
    },
  },
  headRow: {
    style: {
      backgroundColor: "#fed7aa",
    },
  },
};
