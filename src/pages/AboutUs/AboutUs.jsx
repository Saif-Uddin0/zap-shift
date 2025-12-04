import { useState } from "react";

export default function AboutUs() {
  const tabs = ["Story", "Mission", "Success", "Team & Others"];
  const [activeTab, setActiveTab] = useState("Story");

  const content = {
    Story: `We began with a vision to reshape the delivery landscape — making parcel logistics truly 
    seamless, dependable, and stress-free. Over time, we listened to customer needs, optimized routes, 
    improved communication, and designed a tracking system that brings peace of mind. Our journey is 
    fueled by commitment and innovation, built on trust and relationships that continue to grow every day.
    We began with a vision to reshape the delivery landscape — making parcel logistics truly 
    seamless, dependable, and stress-free. Over time, we listened to customer needs, optimized routes, 
    improved communication, and designed a tracking system that brings peace of mind. Our journey is 
    fueled by commitment and innovation, built on trust and relationships that continue to grow every day.`,

    Mission: `Our mission is to deliver more than packages — we deliver satisfaction, reliability, and 
    assurance. By leveraging modern technology and skilled human support, we aim to simplify the logistics 
    experience while ensuring speed, safety, and transparency. We are committed to reducing delays, improving 
    communication, and providing end-to-end clarity at each step.
    
    Our mission is to deliver more than packages — we deliver satisfaction, reliability, and 
    assurance. By leveraging modern technology and skilled human support, we aim to simplify the logistics 
    experience while ensuring speed, safety, and transparency. We are committed to reducing delays, improving 
    communication, and providing end-to-end clarity at each step.`,

    Success: `Our growing user base, returning customers, and increased partnerships define our success. 
    With every successful delivery, we strengthen trust. From local communities to rising businesses, we have 
    built a service that adapts, scales, and prioritizes customer experience at every level.
    
    Our growing user base, returning customers, and increased partnerships define our success. 
    With every successful delivery, we strengthen trust. From local communities to rising businesses, we have 
    built a service that adapts, scales, and prioritizes customer experience at every level.`,

    "Team & Others": `Behind each successful delivery is a team of thinkers, planners, developers, drivers, 
    and customer support professionals working in sync. We believe in empowering talent, encouraging learning, 
    and pushing boundaries. Our team is not just executing deliveries — we are shaping the future of smart logistics.
    
    Behind each successful delivery is a team of thinkers, planners, developers, drivers, 
    and customer support professionals working in sync. We believe in empowering talent, encouraging learning, 
    and pushing boundaries. Our team is not just executing deliveries — we are shaping the future of smart logistics.`
  };

  return (
    <section className="container mx-auto bg-white p-24 rounded-2xl shadow-md  my-16">
      <h2 className="text-5xl font-bold text-[#004d40]">About Us</h2>
      <p className="text-gray-500 mt-4 text-base">
        Fast, reliable parcel delivery with real-time tracking and hassle-free support.
      </p>

      {/* Tabs */}
      <div className="flex gap-12 border-b border-gray-300 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-3 text-lg font-medium transition ${
              activeTab === tab
                ? "text-[#00695c] border-b-2 border-[#009688]"
                : "text-gray-500 hover:text-[#00796b]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-10 text-gray-600 leading-relaxed text-lg tracking-wide">
        {content[activeTab]}
      </div>
    </section>
  );
}
