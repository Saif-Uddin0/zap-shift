import React from "react";
import { Search } from "lucide-react";
import map from '../../assets/Map.png'

export default function Coverage() {
  return (
    <section className="bg-gray-50 container mx-auto py-12 px-4 rounded-2xl shadow-sm my-20">
      <div className=" text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          We are available in <span className="text-accent">64 districts</span>
        </h2>

        {/* Search Bar */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search here"
              className="w-full pl-10 pr-24 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-base-200"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-secondary hover:bg-green-400 text-black px-5 py-1.5 rounded-full transition-all">
              Search
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6">
          We deliver almost all over <span className="font-semibold text-accent">Bangladesh</span>
        </p>

        {/* Map */}
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <img
            src={map}
            alt="Bangladesh map"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
