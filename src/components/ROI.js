import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const FinancialData = () => {
  const data = [
    {
      name: "Revenue",
      value: 1000000
    },
    {
      name: "Expenses",
      value: 800000
    },
    {
      name: "Profit Margins",
      value: 0.20
    },
    {
      name: "Cash Flow",
      value: 200000
    },
    {
      name: "ROI",
      value: 0.25
    }
  ];

  const colorPalette = ["#FF6384", "#36A2EB", "#FFCE56", "#8A3FFC", "#FF9800", "#4CAF50", "#9C27B0"];

  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <ul className="flex flex-wrap" style={{ fontSize: "12px" }}>
        {payload.map((entry, index) => (
          <li className="mr-4 flex items-center" key={`item-${index}`}>
            <svg className="w-3 h-3 mr-1" viewBox="0 0 32 32" version="1.1">
              <path
                d="M16,32 C7.164,32 0,24.836 0,16 C0,7.164 7.164,0 16,0 C24.836,0 32,7.164 32,16 C32,24.836 24.836,32 16,32 Z M16,28 C22.627,28 28,22.627 28,16 C28,9.373 22.627,4 16,4 C9.373,4 4,9.373 4,16 C4,22.627 9.373,28 16,28 Z"
                fill={entry.color}
              />
            </svg>
            <span>{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              fontSize={12}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colorPalette[index % colorPalette.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend content={renderLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinancialData;

