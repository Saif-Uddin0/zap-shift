import React from "react";
import trackingImg from "../../assets/live-tracking.png";
import safeDeliveryImg from "../../assets/safe and call support.png";

export default function FeatureSection() {

  const features = [
    {
      img: trackingImg,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    },
    {
      img: safeDeliveryImg,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      img: safeDeliveryImg,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need help.",
    },
  ];

  return (
    <div className="container mx-auto px-10 py-15">
      <div className="flex flex-col gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 flex gap-6 items-start hover:shadow-md transition duration-300"
          >
            <img src={feature.img} alt={feature.title} className="h-32 w-32 object-contain" />

            <div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-primary mt-2 text-sm flex flex-wrap">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-base-100 border-b  mt-20 border-dashed"></div>
    </div>
  );
}
