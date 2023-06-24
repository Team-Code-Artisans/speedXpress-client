import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import DataTable from 'react-data-table-component';
import { AiOutlineCopy } from 'react-icons/ai';
import { getReturnedParcels } from '../../../../API Operations/manageParcels';
import BigSpinner from '../../../../components/Spinners/BigSpinner';

export const ReturnedDeliveries = ({ handleCopy, employeeDistrict }) => {

    const {
        data: completedParcels = [],
        isLoading,
    } = useQuery({
        queryKey: [employeeDistrict],
        queryFn: () => getReturnedParcels(employeeDistrict && employeeDistrict),
    });

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
            name: "SHOP INFO",
            selector: (row) => (
                <>
                    {
                        <div className="space-y-1 py-2 text-sm">
                            <p>
                                {row.customerInfo?.merchantName ? row.customerInfo?.merchantName : "From Regular User"}
                            </p>
                            <p>
                                {row.customerInfo?.merchantEmail && row.customerInfo?.merchantEmail}
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
                            <p className="text-rose-600 bg-rose-50 px-3 py-2 rounded-full font-semibold text-xs text-center">
                                Returned
                            </p>
                        </div>
                    }
                </>
            ),
        },
    ];


    return (
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
    );
};

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

