import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MonthlySalesChart = () => {
  // Placeholder data for monthly sales
  const data = [
    { month: 'January', sales: 1000 },
    { month: 'February', sales: 1500 },
    { month: 'March', sales: 1200 },
    { month: 'April', sales: 2000 },
    { month: 'May', sales: 1800 },
    { month: 'June', sales: 2500 },
  ];

  return (
    <div className='py-3 rounded-lg w-full'>
        <h2 className="text-center mb-4">Monthly Sales</h2>
    <BarChart width={600} height={260} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#36A2EB" />
    </BarChart>
    </div>
  );
};

export default MonthlySalesChart;
