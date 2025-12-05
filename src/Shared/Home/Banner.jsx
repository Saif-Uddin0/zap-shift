import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import bannerImg1 from "../../assets/male courier.png";
import bannerImg2 from "../../assets/banner_delivery_man 2.png";
import bannerImg3 from "../../assets/banner-dleiveryman3.png";

const Banner = () => {
    return (
        <div className="bg-base-100 mt-15 container mx-auto rounded-2xl">
            <section className="flex flex-col lg:flex-row items-center justify-between p-10 lg:px-15">

                {/* Left Text */}
                <div className="flex flex-col gap-5 max-w-xl">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-primary">
                        We Make Sure Your <br />
                        <span className="text-accent">
                            <Typewriter
                                words={["Arrives Safely",
                                    "Delivery Faster",
                                    "Service Hassle-Free"]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={50}
                                delaySpeed={500}
                            />
                        </span>
                        <br /> Every Single -Time
                    </h1>

                    <p className="text-base-300 text-md leading-relaxed">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>

                    <div className="flex gap-3 mt-2">
                        <button className="bg-secondary text-base-300 px-6 py-3 rounded-full font-semibold hover:bg-secondary/80 transition">
                            Track Your Parcel
                        </button>

                        <button className="px-6 py-3 border border-primary/30 text-primary rounded-full hover:bg-primary hover:text-base-100 transition">
                            Be a Rider
                        </button>
                    </div>
                </div>

                {/* Right Side — Slider */}
                <div className="mt-10 lg:mt-0 w-full mx-auto max-w-md">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                        pagination={{ clickable: true }}
                        className="rounded-xl "
                    >
                        <SwiperSlide className="flex justify-center p-6">
                            <img src={bannerImg1} alt="Delivery Slide 1" className="w-full drop-shadow-xl" />
                        </SwiperSlide>

                        <SwiperSlide className="flex justify-center p-6">
                            <img src={bannerImg2} alt="Delivery Slide 2" className="w-full drop-shadow-xl" />
                        </SwiperSlide>

                        <SwiperSlide className="flex justify-center p-6">
                            <img src={bannerImg3} alt="Delivery Slide 3" className="w-full drop-shadow-xl" />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </section>
        </div>
    );
};

export default Banner;
