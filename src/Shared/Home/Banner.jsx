import React from "react";
import bannerImg from "../../assets/male courier.png"; // 

const Banner = () => {
    return (
        <div className="bg-base-100 mt-15 container mx-auto rounded-2xl">
            <section className=" flex flex-col lg:flex-row items-center justify-between  p-10 lg:px-15 ">

                {/* Left Content */}
                <div className="flex flex-col gap-5 max-w-xl">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-primary">
                        We Make Sure Your <br /><span className="text-accent">Parcel Arrives</span> On Time <br /> – No Fuss.
                    </h1>

                    <p className="text-primary text-sm">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.
                    </p>

                    <div className="flex gap-3 mt-2">
                        <button className="bg-secondary text-base-300 px-6 py-3 rounded-full font-semibold hover:bg-secondary/80 transition">
                            Get Started
                        </button>

                        <button className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-base-100 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="mt-10 lg:mt-0">
                    <img
                        src={bannerImg}
                        alt="Banner"
                        className="w-full max-w-[500px] drop-shadow-xl"
                    />
                </div>

            </section>
        </div>
    );
};

export default Banner;
