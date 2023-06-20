import { useQueries } from "@tanstack/react-query";
import {useContext, useState } from "react";
import DataTable from "react-data-table-component";
import { getParcels } from "../../../../API Operations/manageParcels";
import { AuthContext } from "../../../../contexts/AuthProvider";

const RegularDelivery = () => {
    const {user} = useContext(AuthContext)

    const [filterData,setFilterData] = useState()
    const [activeStatus, setActiveStatus] = useState(1);



    const {data:allParcels=[],isLoading,refetch}=useQueries({
        queryKey : ['allParcels'],
        queryFn: () => getParcels(user?.email)
    });

    console.log(allParcels);
    console.log('jhio');

  















    const columns= [
        {
            name:'hi',
            selector: (row)=>row.name
        },
    ]


    return (
        <div className="max-w-screen-2xl mx-auto px-4">
               <div className="my-10">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                    All <span className="text-orange-600">Deliveries</span>
                    </h1>

                    <div className="mt-2">
                    <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
                    </div>
                </div>

                {/* table */}

                {
                    isLoading ? 'hi' : " hlw"
                }
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
                        
                    />
        </div>
    );
};

export default RegularDelivery;