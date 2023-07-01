import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  {
    category: "Electronics",
    sales: 500
  },
  {
    category: "Clothing",
    sales: 300
  },
  {
    category: "Home Decor",
    sales: 200
  },
  {
    category: "Books",
    sales: 150
  },
  {
    category: "Beauty",
    sales: 100
  }
];

const colorPalette = ["#FF6384", "#36A2EB", "#FFCE56", "#8A3FFC", "#FF9800"];

const TotalSales = () => {
  const totalSalesAmount = data.reduce((total, product) => total + product.sales, 0);
  const formattedTotalSalesAmount = (totalSalesAmount / 1000).toFixed(2);

  return (
    <div className="py-3 rounded-lg w-full">
      <h2 className="text-center">Total Sales {new Date().getFullYear()}</h2>
      <div className="flex items-center justify-center gap-10 relative">
        <PieChart width={380} height={260}>
          <Pie
            data={data}
            dataKey="sales"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorPalette[index % colorPalette.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} Million`} />
          <text
            x="50%"
            y="45%"
            dy={8}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-3xl font-bold"
          >
            {formattedTotalSalesAmount}
            <tspan x="50%" y='50%' dy={24} className="block ">
              Million
            </tspan>
          </text>
        </PieChart>
      </div>
    </div>
  );
};

export default TotalSales;
