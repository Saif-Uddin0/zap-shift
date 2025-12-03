import React from "react";
import { FaMapMarkedAlt, FaTruckMoving, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaMapMarkedAlt size={35} />,
      title: "Choose Pickup & Destination",
      desc: "Enter your pickup and drop-off location in a single click.",
    },
    {
      icon: <FaTruckMoving size={35} />,
      title: "We Collect & Deliver",
      desc: "Our delivery partner will pick up and deliver safely.",
    },
    {
      icon: <FaCheckCircle size={35} />,
      title: "Receive On Time",
      desc: "Track your parcel in real-time and receive hassle-free.",
    },
  ];

  return (
    <section className="container mx-auto mt-20 px-5 lg:px-0 text-center">
      {/* Section Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-primary">
        How It Works
      </h2>
      <p className="mt-2 text-base-300 max-w-xl mx-auto">
        Simple, Fast & Reliable — Just follow three easy steps.
      </p>

      {/* Steps */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-16 relative">


       

        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 bg-base-100 shadow-md rounded-2xl p-6 w-full lg:w-[30%] hover:scale-105 transition duration-300"
          >
            <div className="bg-secondary text-base-300 p-4 rounded-full shadow-md">
              {step.icon}
            </div>
            <h3 className="font-semibold text-lg text-primary">{step.title}</h3>
            <p className="text-base-300 text-sm max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
