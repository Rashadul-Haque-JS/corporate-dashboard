import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MarketingMetrics = () => {
  const marketingData = {
    conversionRate: 0.1,
    clickThroughRate: 0.05,
    costPerAcquisition: 50,
    customerAcquisitionCost: 100,
    returnOnAdvertisingSpend: 2.5,
  };

  const data = [
    { name: 'Conversion Rate', value: marketingData.conversionRate },
    { name: 'Click Through Rate', value: marketingData.clickThroughRate },
    { name: 'Cost Per Acquisition', value: marketingData.costPerAcquisition },
    { name: 'Customer Acquisition Cost', value: marketingData.customerAcquisitionCost },
    { name: 'Return on Advertising Spend', value: marketingData.returnOnAdvertisingSpend },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[100%]">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketingMetrics;
