import CopyToClipboard from "react-copy-to-clipboard";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import { AiOutlineCopy } from "react-icons/ai";
import { updateStatus } from "../../../../API Operations/manageAdminDeliveries";
import BigSpinner from "../../../../components/Spinners/BigSpinner";

const PendingDeliveriesForAdmin = ({
  isLoading,
  pendingDeliveries, handleCopy,
  refetch,
}) => {

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
              <span className="text-blue-600 pr-2">
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
      name: "Fees INFO",
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
              {!row.paid ?
                <p className="text-rose-500 px-4 py-[2px] rounded-full text-center font-medium" aria-disabled>
                  UNPAID
                </p>

                : <p className="text-emerald-500 px-4 py-[2px] rounded-full text-center font-medium" aria-disabled>
                  PAID
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
            <div className="uppercase font-semibold">
              <p className={`${row?.status === "complete" && 'text-blue-500'} ${row?.status === "pending" && 'text-rose-600'}
                      ${row?.status === "accepted" && 'text-green-600'}`}>
                {row?.status}
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
                  <button className={`rounded-full text-center  px-4 py-2 font-medium text-sm bg-blue-500  text-white`}
                    onClick={() => handleChangStatus(row._id)}>
                    Accept
                  </button>
                  :
                  <p className="uppercase font-semibold text-blue-500">Accepted</p>
              }
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
        console.log(err.message);
      });
  };

  return (
    <DataTable
      columns={columns}
      data={pendingDeliveries}
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
      backgroundColor: "#93c5fd",
    },
  },
};
