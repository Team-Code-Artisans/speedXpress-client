import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteData, getUser } from "../../../../API Operations/manageUsers";
import BigSpinner from "../../../../components/Spinners/BigSpinner";

const AdminMerchant = () => {

    const [myMerchant, setMyMerchant] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState()
    const [filterData, setFilterData] = useState()

    // fetch the merchant data
    useEffect(() => {
        fetchMerchants()
    }, [myMerchant])


    const fetchMerchants = () => {
        getUser('merchant')
            .then(res => {
                if (res.success) {
                    setMyMerchant(res.data)

                    setIsLoading(false)
                }
            })
            .catch(error => {
                console.log(error.message);
                setIsLoading(false);
                toast.error("operation failed")
            })
    }

    useEffect(() => {
        const result = myMerchant?.filter(merchant => {
            return merchant?.ownerName?.toLowerCase().match(search?.toLowerCase())
        })
        setFilterData(result)
    }, [search, myMerchant])


    // table data 
    const columns = [
        {
            name: 'Merchant Name',
            selector: row => row.ownerName,
        },
        {
            name: 'Merchant Email',
            selector: row => row.email,
        },
        {
            name: 'Shop Name',
            selector: row => row.shopName,
        },
        {
            name: 'Shop Address',
            selector: row => row.shopAddress,
        },
        {
            name: 'Contact Info',
            selector: row => row.phoneNumber,
        },
        {
            name: 'Action',
            selector: row => (
                <>
                    <button onClick={() => handleDelete(row?._id)}>
                        <AiOutlineDelete size={20} color="red" />
                    </button>
                </>
            )
        },
    ]
    const handleDelete = (id) => {
        let context = "merchant"
        if (confirm("Are you sure to delete data")) {
            deleteData(id, context).then(data => {
                if (data?.success) {
                    toast.success(data?.message)
                    fetchMerchants()
                }
            })
                .catch(err => {
                    toast.error(err.message)
                })
        }
    }


    return (
        <>
            {
                isLoading ?
                    <BigSpinner></BigSpinner>
                    :
                    <div className="container m-auto">

                        <div className=" lg:flex items-center justify-between pb-6">
                            <div>
                                <div className="my-10">
                                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                                        All <span className="text-blue-600">Merchants</span>
                                    </h1>

                                    <div className="mt-2">
                                        <span className="inline-block w-20 h-1 bg-blue-500 rounded-full"></span>
                                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                    </div>
                                </div>
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

                        {/* table info */}
                        <DataTable
                            columns={columns}
                            data={filterData}
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight="600px"
                            highlightOnHover
                            striped
                            customStyles={styles}
                        />
                    </div>
            }
        </>
    );
};

export default AdminMerchant;

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
