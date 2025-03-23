// src/components/UserGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const UserGraph = ({ data }) => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'User Growth',
        data: data,  // You can fetch this data from an API as well
        fill: false,
        borderColor: '#4caf50',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white shadow-lg p-16 rounded-lg grid place-items-center h-fit">
      <h3 className="text-3xl font-medium">User Growth</h3>
      <Line data={chartData} />
    </div>
  );
};

export default UserGraph;
