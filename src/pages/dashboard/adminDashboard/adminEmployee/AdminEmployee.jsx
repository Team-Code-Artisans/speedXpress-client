import { useEffect, useState } from "react";
import { getUser } from "../../../../API Operations/manageUsers";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import BigSpinner from "../../../../components/Spinners/BigSpinner";

const AdminEmployee = () => {

    const [employee,setEmployee] = useState()
    const [isLoading,setIsLoading] = useState(true)
    const [search,setSearch] = useState()
    const [filterData,setFilterData] = useState()



    // fetch the merchant data
    useEffect(()=>{
        getUser('employee')
        .then(res =>{
            if(res.success){
                setEmployee(res.data)
                setIsLoading(false)
            }
        })
        .catch(error =>{
            console.log(error.message);
            setIsLoading(false);
            toast.error("operation failed")
            })
    },[])


    useEffect(()=>{
        const result = employee?.filter(merchant => {
            return merchant?.name?.toLowerCase().match(search?.toLowerCase())
        })
        setFilterData(result)
    },[search,employee])


    // table data 
    const columns = [
        {
            name:'Employee Name',
            selector:row => row.name,
        },
        {
            name:'Employee ID',
            selector:row => <p className="text-red-500">{row._id}</p>,
        },
        {
            name:'Email',
            selector:row => row.email,
        },
        {
            name:'Address',
            selector:row => row.address,
        },
       
        {
            name:'Contect Cell',
            selector:row => row.phoneNumber,
        },
    ]


    return (
        <>
            
              

              {
                isLoading ? 

                 <BigSpinner></BigSpinner>

                  : 


                <div className="container m-auto">

                    <div className="my-10">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                            All <span className="text-orange-600">Employee</span>
                            </h1>

                            <div className="mt-2">
                            <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
                            </div>
                        </div>


                        {/* search function */}

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
                            placeholder="Search by Employee Name"
                        />
                        </div>
                       
                    </div>

                    <br />



                    {/* table info */}
                    <DataTable
                    columns={columns}
                    data={filterData}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="600px"
                    highlightOnHover
                    striped
                    

                    />


                </div>
              }

                
               
               
                       
            
             
        </>
    );
};

export default AdminEmployee;


