import React from 'react';
import { Line, Doughnut, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { lineData, lineOptions, pieData, pieOptions } from '../../utils/StaticData/ChartData';

// تسجيل المكونات اللازمة من Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps = {
  data: ChartData<'line' | 'pie'>;
  options: ChartOptions<'line'> | ChartOptions<'pie'>;
  title: string;
};

const Chart: React.FC<ChartProps> = ({ data, options, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {data.datasets[0].type === 'line' && <Line data={data as ChartData<'line'>} options={options as ChartOptions<'line'>} />}
      {data.datasets[0].type === 'pie' && <Pie data={data as ChartData<'pie'>} options={options as ChartOptions<'pie'>} />}
    </div>
  );
};

type ChartComponentProps = {
  data: ChartData<'line' | 'pie'>;
  option: ChartOptions<'line'> | ChartOptions<'pie'>;
};

const LineChart: React.FC<ChartComponentProps> = ({ data, option }) => <Chart data={data} options={option} title="الطلبيات المستلمة والملغات  " />;
const PieChart: React.FC<ChartComponentProps> = ({ data, option }) => <Chart data={data} options={option} title="Pie Chart" />;

export { LineChart, PieChart };
