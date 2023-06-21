import { useContext, useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { toast } from "react-hot-toast"
import { BiTrashAlt } from "react-icons/bi"
import { deleteData, getMyCustomers } from "../../../API Operations/manageUsers"
import BigSpinner from "../../../components/Spinners/BigSpinner"
import { AuthContext } from "../../../contexts/AuthProvider"

export const MyCustomers = () => {
    const [loading, setLoading] = useState(true)
    const [myCustomers, setMyCustomers] = useState([])
    const { user } = useContext(AuthContext)
    // const [defaultText,setDefaultText]=useState("")

    const [search, setSearch] = useState()
    const [filterData, setFilterData] = useState()

    useEffect(() => {
        fetchCustomers()

    }, [user?.email])

    const fetchCustomers = () => {
        getMyCustomers(user?.email)
            .then(data => {
                if (data.success) {
                    setMyCustomers(data.data)
                    setLoading(false)
                }

            })
            .catch(err => {
                console.log(err.message);
                setLoading(false);
                toast.error("operation failed")
            })
    }

    // filter data depend on search 

    useEffect(() => {
        const result = myCustomers?.filter(customer => {
            console.log(customer);
            return customer?.name?.toLowerCase()?.match(search?.toLowerCase())
        })
        setFilterData(result)
    }, [myCustomers, search])

    // table data for dataTable 

    const columns = [
        {
            name: 'Customer Name',
            selector: row => row.name,
        },
        {
            name: 'Customer Email',
            selector: row => row.email,
        },
        {
            name: 'Customer Address',
            selector: row => row.address,
        },
        {
            name: 'Customer Phone',
            selector: row => row.number,
        },
        {
            name: "Action",
            selector: row => (
                <>
                    {
                        <div className="space-y-1 py-2 text-sm">
                            <p>
                                <button className="text-rose-700" title="Delete merchant account" onClick={() => handleDelete(row?._id)} >
                                    <BiTrashAlt size={22} />
                                </button>
                            </p>

                        </div>
                    }
                </>
            ),
        },
    ]

    const handleDelete = (id) => {
        console.log("deleteing", id)
        let context="customer"
        if (confirm("Are you sure to delete data")) {
            deleteData(id,context).then(data => {
                if (data?.success) {
                    toast.success(data?.message)
                    console.log(data?.message)
                    fetchCustomers()
                }
            })
                .catch(err => {
                    toast.error(err.message)
                })
        }
    }

    const styles = {
        rows: {
            style: {
                fontSize: '1rem'
            },
        },
        headCells: {
            style: {
                backgroundColor: '#fed7aa',
                color: 'red'
            },
        },
    };



    return (
        <>
            {
                loading ?
                    <BigSpinner />
                    :

                    <div className="container m-auto">


                        <div className="my-10">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                                All <span className="text-orange-600">Customers</span>
                            </h1>

                            <div className="mt-2">
                                <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
                            </div>
                        </div>



                        {/* search function  */}


                        <div className="flex items-center">
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
                                    placeholder="Search"
                                />
                            </div>

                        </div>

                        <br />




                        {/* table component */}
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
    )
}



