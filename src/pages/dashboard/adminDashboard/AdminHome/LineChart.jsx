import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler } from 'chart.js'

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler,
)

const LineChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Showing Monthly Order',
            data: [65, 59, 80, 81, 56, 55, 40, 67, 84, 79],
            fill: true,
            borderColor: 'rgb(244, 91, 29)',
            pointBorderColor: 'rgb(244, 91, 29)',
            backgroundColor: '#ffd8ae',
            tension: 0.1
        }]
    }

    const options = {
        Plugin: {
            legend: true,
            Tooltip: true,
            filler: {
                propagate: false,
            },
        },
        scales: {
            y: {
                min: 10,
                max: 100,
            }
        }
    };

    return (
        <div className='md:w-[50rem]'>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart