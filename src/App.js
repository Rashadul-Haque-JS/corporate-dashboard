import React from "react";
import MonthlySalesChart from "./components/MonthlySalesChart";
import SocialMedia from "./components/SocialMedia";
import MarketingMetrics from "./components/MarketingMatrics";
import TotalSales from "./components/TotalSales";
import ROI from "./components/ROI";
import Watch from "./components/Watch";

const Dashboard = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-100 sm:pb-8 md:pb-6 relative">
      <div className="flex flex-col justify-start items-center w-full min-h-screen sm:w-[96%] sm:h-auto mt-2 gap-6">
        <div className="mt-4">
          <h1 className="text-center text-xl font-bold uppercase mb-2 text-blue-900">
          StatCraft Labs 
          </h1>
          <p className="text-center w-full text-sm text-gray-600 font-semibold">DASHBOARD</p>
          <Watch />
        </div>
        <div className="flex sm:flex-wrap md:flex-wrap justify-between gap-4 items-center w-full sm:justify-center md:justify-center sm:gap-8 border border-gray-300 px-4 sm:px-1 py-2 font-bold">
          <div className="w-full flex flex-col justify-center items-center">
            <TotalSales />
          </div>
          <div className="w-full flex flex-col justify-between items-center">
            <MonthlySalesChart />
          </div>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 px-4 sm:px-1 text-center font-bold">
          <div className="grid grid-cols-1 gap-4 place-content-center">
            <h2>Social Media</h2>
            <SocialMedia />
          </div>
          <div className="grid grid-cols-1 gap-4 place-content-center">
            <h2>Marketing Metrics</h2>
            <MarketingMetrics />
          </div>
          <div className="grid grid-cols-1 gap-4 place-content-center">
            <h2>ROI</h2>
            <ROI />
          </div>
        </div>
      </div>
      <small style={{position:'absolute', bottom:'14px', right:'20px', fontSize:'8px', fontWeight:'bold'}}>@Rashadul H</small>
    </div>
  );
};

export default Dashboard;
