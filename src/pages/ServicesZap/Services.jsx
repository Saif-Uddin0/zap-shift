import React from "react";
import {
    FaShippingFast,
    FaMapMarkedAlt,
    FaMoneyBillWave,
    FaShieldAlt,
    FaClock,
    FaBoxes,
} from "react-icons/fa";

const Services = () => {
    return (
        <div className=" my-20">

            {/* ================= HERO SECTION ================= */}
            <section className="bg-gradient-to-r from-primary to-base-300 text-base-100 py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Services
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg opacity-90">
                        Zap Shift delivers fast, secure, and reliable parcel solutions designed
                        to simplify your shipping experience.
                    </p>
                </div>
            </section>

            {/* ================= CORE SERVICES ================= */}
            <section className="py-20 max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                    What We Offer
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard
                        icon={<FaShippingFast className="text-primary bg-secondary rounded-full p-2.5 w-13 h-13" />}
                        title="Express Delivery"
                        desc="Fast and reliable door-to-door delivery with real-time updates."
                    />
                    <ServiceCard
                        icon={<FaMapMarkedAlt className="text-primary bg-secondary rounded-full p-2.5 w-13 h-13" />}
                        title="Real-Time Tracking"
                        desc="Track your parcel anytime with a unique tracking ID."
                    />
                    <ServiceCard
                        icon={<FaMoneyBillWave className="text-primary bg-secondary rounded-full p-2.5 w-13 h-13" />}
                        title="Secure Online Payments"
                        desc="Stripe-powered secure and seamless online payments."
                    />
                    <ServiceCard
                        icon={<FaShieldAlt className="text-primary bg-secondary rounded-full p-2.5 w-13 h-13" />}
                        title="Safe Handling"
                        desc="Your parcels are handled with care and safety guaranteed."
                    />
                    <ServiceCard
                        icon={<FaClock className="text-primary bg-secondary rounded-full p-2.5 w-13 h-13" />}
                        title="On-Time Delivery"
                        desc="We prioritize punctual delivery without compromise."
                    />
                    <ServiceCard
                        icon={<FaBoxes className="text-primary bg-secondary rounded-full p-2.5 w-13 h-13" />}
                        title="Bulk & Business Shipping"
                        desc="Affordable and scalable solutions for businesses."
                    />
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="bg-primary py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-base-100">
                        Why Choose Zap Shift?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <WhyCard
                            title="Trusted Service"
                            desc="Hundreds of successful deliveries with happy customers."
                        />
                        <WhyCard
                            title="Smart Technology"
                            desc="Modern tracking, secure payments, and automated updates."
                        />
                        <WhyCard
                            title="Customer First"
                            desc="Dedicated support to assist you at every step."
                        />
                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS ================= */}
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                    How It Works
                </h2>

                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <Step number="1" title="Book Parcel" />
                    <Step number="2" title="Make Payment" />
                    <Step number="3" title="Track Shipment" />
                    <Step number="4" title="Delivered Safely" isLast />
                </div>
            </section>


        </div>
    );
};

/* ================= COMPONENTS ================= */
const ServiceCard = ({ icon, title, desc }) => (
    <div className="bg-base-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
        <div className="text-primary text-4xl mb-4 flex justify-center">
            {icon}
        </div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </div>
);

const WhyCard = ({ title, desc }) => (
    <div className="bg-base-100 p-8 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </div>
);

const Step = ({ number, title, isLast }) => (
  <div className="relative flex flex-col items-center px-4">
    
    {/* Step Circle */}
    <div className="w-18 h-18 rounded-full bg-secondary text-primary flex items-center justify-center text-xl font-bold mb-3 z-10">
      {number}
    </div>

    {/* Title */}
    <p className="font-medium lg:text-lg">{title}</p>

    {/* Right Border (Except Last) */}
    {!isLast && (
      <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 border-r-2 border-primary"></span>
    )}
  </div>
);


export default Services;
