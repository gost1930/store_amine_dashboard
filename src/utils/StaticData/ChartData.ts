import { ChartData, ChartOptions } from "chart.js";
const days = ["الجمعة", "السبت", "الأحد", "الإثنين", "الثلثاء", "الأربعاء", "الخميس"]
export const lineData: ChartData<'line'> = {
    labels: days,
    datasets: [
        {
            label: 'الطلبيات المستلمة',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#3B82F6',
            tension: 0.1,
            type: 'line',
        },
        {
            label: 'الطلبات الملغات',
            data: [6, 5, 8, 21, 26, 35, 45],
            fill: false,
            borderColor: 'red',
            tension: 0.1,
            type: 'line',
        },
    ],
};
export const lineData2: ChartData<'line'> = {
    labels: days,
    datasets: [
        {
            label: 'الطلبيات المستلمة',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#3B82F6',
            tension: 0.1,
            type: 'line',
        },
        {
            label: 'الطلبات الملغات',
            data: [6, 5, 8, 21, 26, 35, 45],
            fill: false,
            borderColor: 'red',
            tension: 0.1,
            type: 'line',
        },
    ],
};

export const lineOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Line Chart Example',
        },
    },
};



export const pieData: ChartData<'pie'> = {
    labels: ['Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Popularity',
            data: [200, 150, 100],
            backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
            type: 'pie',
        },
    ],
};
export const pieData2: ChartData<'pie'> = {
    labels: ['مستلمة', 'قيد التجهيز', 'عند شركة التوصيل', 'قيد التوصيل', 'ملغات'],
    datasets: [
        {
            label: 'Popularity',
            data: [200, 150, 100, 23, 50],
            backgroundColor: ['green', '#9966FF', '#FF9F40', "yellow", "red"],
            type: 'pie',
        },
    ],
};

export const pieOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Pie Chart Example',
        },
    },
};


export const cardData = [
    { title: "إجمالي المنتجات", value: 0 },
    { title: "الطلبات الجديدة", value: 0 },
    { title: "الطلبات المؤكدة", value: 0 },
    { title: "زيارات المتجر", value: 0 },

]