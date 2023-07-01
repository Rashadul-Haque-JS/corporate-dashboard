import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MonthlySalesChart = () => {
  // Placeholder data for monthly sales
  const data = [
    { month: "January", sales: 240 },
    { month: "February", sales: 190 },
    { month: "March", sales: 240 },
    { month: "April", sales: 290 },
    { month: "May", sales: 250 },
    { month: "June", sales: 350 },
  ];

  return (
    <div className="py-3 rounded-lg w-full">
      <h2 className="text-center mb-4">Monthly Sales</h2>
      <div className="overflow-x-auto w-full">
        <BarChart width={640} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#36A2EB" />
        </BarChart>
      </div>
    </div>
  );
};

export default MonthlySalesChart;
