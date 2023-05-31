import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip
)

const LineChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Showing Monthly Order',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(244, 91, 29)',
            pointBorderColor: 'rgb(244, 91, 29)',
            tension: 0.1
        }]
    }

    const options = {
        Plugin: {
            legend: true,
            Tooltip: true
        },
        scales: {
            y: {
                min: 10,
                max: 100,
            }
        }
    };

    return (
        <div className='md:w-[40rem] py-10'>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart