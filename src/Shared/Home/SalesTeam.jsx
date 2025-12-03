import React from "react";
import casio from "../../assets/casio.png";
import amazon from "../../assets/logo-amazon 1.png";
import moonstar from "../../assets/moonstar 1.png";
import start from "../../assets/start--1 1.png";
import startpeople from "../../assets/start-people 1.png";
import randstad from "../../assets/randstad.png";

export default function SalesTeam() {
  const logos = [casio, amazon, moonstar, start, startpeople, randstad];

  return (
    <div className="container mx-auto py-12 mt-15">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          We've helped thousands of sales teams
        </h2>
        <p className="text-gray-500 mt-2 mb-8">
          Trusted by leading brands around the world
        </p>
      </div>

      <div className="w-full overflow-hidden py-3 mt-10">
        <marquee scrollamount="7" direction="left">
          <div className="flex items-center gap-20">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand-logo"
                className="h-10 w-auto opacity-80 hover:opacity-100 transition cursor-pointer"
              />
            ))}
            {logos.map((logo, i) => (
              <img
                key={"repeat" + i}
                src={logo}
                alt="brand-logo"
                className="h-8 w-auto opacity-80 hover:opacity-100 transition cursor-pointer"
              />
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
}
