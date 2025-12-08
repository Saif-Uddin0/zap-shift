import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CustomerReview() {
  const reviews = [
    {
      name: "Asif Hossain",
      title: "Senior Product Designer",
      review:
        "ZapShift courier services help streamline our eCommerce delivery operations. Reliable, fast and safe shipment every time!",
    },
    {
      name: "Nasir Uddin",
      title: "CEO",
      review:
        "A private courier service providing support with real-time tracking and on-time delivery to customers.",
    },
    {
      name: "Mehmid Hossain",
      title: "Senior Product Designer",
      review:
        "ZapShift courier services help streamline our eCommerce delivery operations. Reliable, fast and safe shipment every time!",
    },
    {
      name: "Raed Ahmed",
      title: "CTO",
      review:
        "Thanks to ZapShift! Delivery solved. Parcel management transparency and delightful customer support.",
    },
  ];

  const reviewItems = [...reviews, ...reviews]; // Duplicate to prevent loop warning

  return (
    <div className="container mx-auto py-20 relative px-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">What our customers are saying</h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Enhance accuracy, mobility, and reliability effortlessly with ZapShift.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {reviewItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-md backdrop-blur-sm">

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{item.review}"
              </p>

              <div className="flex gap-3 items-center">
                <div className="h-12 w-12 bg-gradient-to-br from-green-700 to-green-400 rounded-full shadow-md flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.title}</p>

                  {/* Star Ratings */}
                  <div className="flex mt-1">
                    {Array(5)
                      .fill()
                      .map((_, idx) => (
                        <span key={idx} className="text-yellow-400 text-sm">★</span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styling */}
      <style>
        {`
          .swiper-slide {
            opacity: 0.35;
            filter: blur(2px);
            transform: scale(0.9);
            transition: .35s ease;
          }

          .swiper-slide-active {
            opacity: 1 !important;
            filter: blur(0px) !important;
            transform: scale(1.04);
          }

          .swiper-button-next,
          .swiper-button-prev {
            color: #A2C75E;
            width: 34px;
            height: 34px;
            background: #ffffff;
            border-radius: 50%;
            border: 1px solid #d9e8df;
            top: 45%;
            box-shadow: 0px 2px 6px rgba(0,0,0,0.08);
          }

          .swiper-button-next { right: -15px; }
          .swiper-button-prev { left: -15px; }

          @media(max-width: 640px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none;
            }
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 14px;
            font-weight: bold;
          }

          .swiper-pagination-bullet {
            width: 7px;
            height: 7px;
            background: #b6dac2;
          }
          .swiper-pagination-bullet-active {
            background: #1f5d3c;
            width: 20px;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
}
