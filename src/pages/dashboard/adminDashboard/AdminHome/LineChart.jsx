import { CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler,
)

const LineChart = ({deliveriesTimes, chargeAmount}) => {
    const data = {
        labels: deliveriesTimes,
        datasets: [{
            label: 'Showing Monthly Order',
            data: chargeAmount,
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
                min: 80,
                max: 450,
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