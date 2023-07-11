import { useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import { AiOutlineCopy } from 'react-icons/ai';
import StripeCheckout from "react-stripe-checkout";
import instance from "../../../../axios";
import BigSpinner from "../../../../components/Spinners/BigSpinner";
import { AuthContext } from "../../../../contexts/AuthProvider";


const RegularAllDelivery = ({ isLoading, filterData, handleCopy, refetch }) => {
    const stripeKey = import.meta.env.VITE_Stripe_public_key;
    // console.log(stripeKey)
    // Use stripeKey in your component
    console.log(filterData)
    const { user } = useContext(AuthContext)
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
            name: "SENDER MAIL",
            selector: (row) => (
                <>
                    {
                        <div className="space-y-1 py-2 text-sm">
                            <p>
                                {row.senderEmail}
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
                            <p className={` ${row.status==="accepted" ? "text-green-500" : "text-amber-400"} px-4 py-2 rounded-full text-center font-bold`}>
                                {row.status}
                            </p>
                        </div>
                    }
                </>
            ),
        },
        {
            name: "Action",
            selector: (row, index) => (
                <>
                    {

                        <div>
                            {/* here row._id is my that selected specific parcel id */}
                            {/* {console.log(row._id,index)} */}
                            {!row.paid ?

                                <StripeCheckout
                                    label="pay now" //Component button text
                                    name={user?.displayName} //Modal Header
                                    description={`Complete payment of parcel id ${row._id}`}
                                    // panelLabel={`Complete payment of parcel id ${row.id}` }//Submit button in modal
                                    amount={row.TotalchargeAmount * 100} //Amount in cents $9.99
                                    token={(token) => onToken(token, row._id)}
                                    stripeKey={stripeKey}
                                    image={user?.photoURL} //Pop-in header image

                                // billingAddress={true}
                                />
                                : <p className="text-emerald-500 px-4 py-2 rounded-full text-center font-medium" aria-disabled>
                                    PAID ✔
                                </p>

                            }

                        </div>
                    }
                </>
            ),
        },
    ];

    const onToken = (token, parcelId) => {
        // console.log(token, parcelId);
        instance
            .post("/payment", { token, parcelId })
            .then((response) => {
                // console.log(response);
                if (response.success) {
                    refetch()
                    toast.success("Payment Successfull");
                }
            })
            .catch((error) => {
                console.log("Payment Error: ", error);
                toast.error("Payment operation faild");
            });
    };

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

export default RegularAllDelivery;

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
