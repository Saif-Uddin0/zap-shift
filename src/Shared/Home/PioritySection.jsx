import React from "react";
import bgPriority from "../../assets/Home-banner.png"; 
import rightImg from "../../assets/Home-banner-logo.png"; 

export default function PrioritySection() {
  return (
    <div
      className="max-w-7xl mx-auto py-20 px-10 bg-cover bg-center rounded-2xl my-14"
      style={{ backgroundImage: `url(${bgPriority})` }}
    >
      <div className=" flex flex-col md:flex-row items-center md:items-start justify-between gap-10 text-white px-10">
        
        {/* Left Content */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold leading-tight">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h2>

          <p className="mt-4 text-gray-200 text-sm leading-relaxed">
            With ZapShift Courier services, we make shipping fast and easy with
            safe delivery, instant support, and transparent cost. Our goal is to
            satisfy customers and help your business grow quickly across all
            Bangladesh areas.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-secondary text-base-300 px-6 py-2 rounded-lg font-semibold hover:bg-secondary/80 hover:cursor-pointer transition">
              Become a Merchant
            </button>
            <button className="border border-secondary px-6 py-2 rounded-lg text-secondary hover:bg-green-900 hover:text-white transition">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img src={rightImg} alt="courier-box" className="max-h-52 object-contain" />
        </div>
      </div>
    </div>
  );
}
