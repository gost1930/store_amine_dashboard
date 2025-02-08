import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from 'chart.js';

// Register the necessary components from Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart: React.FC = () => {
    const days = ["الجمعة", "السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"]
    // Define the data for the chart
    const data: ChartData<'line'> = {
        labels: days,
        datasets: [
            {
                label: 'الطلبات المسلمة',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
            {
                label: 'الطلبات الملغات',
                data: [5, 9, 8, 28, 5, 0, 10],
                fill: false,
                borderColor: 'red',
                tension: 0.1,
            },
        ],
    };

    // Define the options for the chart
    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                // text: 'مقارنة بين الطلبات المستلمة والطلبات الملغات',
            },
        },
    };

    return (
        <div>
            <h2>مقارنة بين الطلبات المستلمة والطلبات الملغات.</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
