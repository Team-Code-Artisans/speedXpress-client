import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = () => {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June']
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const config = {
        type: 'line',
        data: data,
    };

    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default LineChart