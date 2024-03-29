import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  {
    category: "Electronics",
    sales: 600
  },
  {
    category: "Clothing",
    sales: 300
  },
  {
    category: "Home Decor",
    sales: 400
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
  const formattedTotalSalesAmount = (totalSalesAmount / 100).toFixed(2);

  return (
    <div className="py-3 rounded-lg w-full">
      <h2 className="text-center">Total Sales</h2>
      <div className="flex justify-center items-center gap-10 relative">
        <PieChart width={380} height={300}>
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
          <Legend
            align="center"
            verticalAlign="bottom"
            iconType="circle"
            payload={data.map((entry) => ({
              value: entry.category,
              type: "circle",
              color: colorPalette[data.indexOf(entry) % colorPalette.length]
            }))}
            formatter={(value) => value}
            wrapperStyle={{ marginTop: '10px', fontSize: '12px' }}
          />
          <text
            x="50%"
            y="38%"
            dy={8}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-4xl font-bold"
          >
            {formattedTotalSalesAmount}
            <tspan
              x="50%"
              y={window.innerWidth < 767 ? "46%" : "44%"}
              dy={24}
              className="block font-extrabold"
            >
              M
            </tspan>
          </text>
        </PieChart>
      </div>
    </div>
  );
};

export default TotalSales;
