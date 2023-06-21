import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import React from 'react'
import { Pie } from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const PieChart = ({totalPendingDeliveries, totalCompletedDeliveries}) => {

    const data = {
        labels: ['Completed', 'Pending', 'In-Transit', 'Return'],
        datasets: [{
            label: 'Total Order Summary',
            data: [totalCompletedDeliveries, totalPendingDeliveries, 13, 4],
            backgroundColor: ['#00a353', '#255ee5', '#D6B85A','#f45b1d']
        }]
    }

    const options = {
        Plugin: {
            legend: true,
            Tooltip: true
        },
    };

    return (
        <div>
            <Pie className='md:w-[25rem] w-[20rem]' data={data} options={options} />
        </div>
    )
}

export default PieChart