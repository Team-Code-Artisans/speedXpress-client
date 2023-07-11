import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import DataTable from 'react-data-table-component';
import { AiOutlineCopy } from 'react-icons/ai';
import { getCompletedParcels } from '../../../../API Operations/manageParcels';
import { getAUser } from '../../../../API Operations/manageUsers';
import BigSpinner from '../../../../components/Spinners/BigSpinner';
import { AuthContext } from '../../../../contexts/AuthProvider';

const EmployeeEarnings = ({ handleCopy }) => {

    const [completedParcels, setCompletedParcels] = useState([])
    const [employeeDistrict, setEmployeeDistrict] = useState([])
    const [totalIncome, setTotalIncome] = useState(0)
    const [loader, setLoader] = useState(false)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        getAUser(user?.email)
            .then((data) => {
                setLoader(true);
                setEmployeeDistrict(data?.district);
                setLoader(false);
            })
            .catch((err) => {
                console.log(err);
                setLoader(false);
            });
    }, [user]);

    const {
        isLoading,

    } = useQuery({
        queryKey: ["deliveryParcels"],
        queryFn: () => getCompletedParcels(employeeDistrict),
        enabled: !loader && employeeDistrict?.length > 0,
        onSuccess: (data) => {
            setCompletedParcels(data);
            if (data.length) {
                calculateTotalEarnings(data)
            }
        },
    });

    // console.log(completedParcels, employeeDistrict);


    // calculate total earning till now
    const calculateTotalEarnings = (deliveries) => {

        // console.log("from func", deliveries)
        let total = deliveries?.reduce((i, delivery) => {
            let charge = Number(delivery.TotalchargeAmount)
            // console.log(charge, i)
            return charge + i;
        },0)
        setTotalIncome(total)
    }

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
            name: "STATUS",
            selector: (row) => (
                <>
                    {
                        <div>
                            <p className="text-green-600 bg-green-50 px-3 py-2 rounded-full font-semibold text-xs rounded-full text-center">
                                {row.status}
                            </p>
                        </div>
                    }
                </>
            ),
        },
    ];


    return (
        <>
            <h1 className='text-2xl py-3.5 text-center font-semibold'>Total Earnings ${totalIncome}</h1>
            <DataTable
                columns={columns}
                data={completedParcels}
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

        </>
    );
};




export default EmployeeEarnings


const styles = {
    rows: {
        style: {
            fontSize: '1rem',
        },
    },
    headRow: {
        style: {
            backgroundColor: '#e8fccf',
            marginTop:"1rem",
    
        },
    },
    
};