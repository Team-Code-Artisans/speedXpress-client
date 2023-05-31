import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const PieChart = () => {

    const data = {
        labels: ['Completed', 'Pending', 'Canceled'],
        datasets: [{
            label: 'Total Order Summary',
            data: [100, 65, 10],
            backgroundColor: ['#00a353', '#255ee5', '#f45b1d']
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