import React from "react";
import logo from '../../assets/Service-logo.png'

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver Next Day / Regular delivery service inside Dhaka, Chattogram, Sylhet, Khulna, Rajshahi & Barisal.",
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery services covering all districts and upazillas.",
    highlight: true, // for green highlight box
  },
  {
    title: "Fulfillment Solution",
    desc: "We offer customized warehouse management, stock inventory & product fulfillment solutions.",
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product..",
  },
  {
    title: "Corporate Service / Contract Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support. .",
  },
  {
    title: "Parcel Return",
    desc: "Hassle-free return management with tracking and logistic support.",
  },
];

export default function OurService() {
  return (
    <div className="container mx-auto rounded-2xl bg-[#0C2A2A] flex justify-center mt-15 ">
      <div className=" text-center p-16 ">
        <h2 className="text-3xl font-bold text-white">Our Services</h2>
        <p className="text-gray-300 mt-2 mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and low fees.
          From personal packages to business shipments – we deliver on time, every time.
        </p>

        {/* grid box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md transition duration-300
                ${service.highlight ? "bg-[#C0EDCE]" : "bg-white"}`}
            >
              <div className="flex justify-center">
                <img src={logo} alt="icon" className="h-12 w-10 mb-3"/>
              </div>
              <h3 className="font-semibold text-lg">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
