import React from 'react';
import riderImg from "../../assets/be-a-rider.png";
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';

const BeaRider = () => {


    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, control } = useForm();
    const data = useLoaderData();

    // find the single region
    const regionDuplicated = data.map(c => c.region)
    const region = [...new Set(regionDuplicated)]


    // observer when chnage the region immedately chage the district
    const senderRegion = useWatch({ control, name: 'senderRegion' })

    const handleBeRider = data =>{
        console.log(data);
        
    }



    return (
        <section className="container mx-auto bg-white rounded-2xl  px-20 py-12 shadow-md my-20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-10 px-7">

                {/* Text Left Side */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-[#004d40]">Be a Rider</h2>
                    <p className="text-gray-500 mt-1 text-sm leading-relaxed">
                        Enjoy fast, reliable parcel delivery with real-time tracking and hassle-free support.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>

                    <h3 className="font-semibold mt-8 mb-4 text-lg text-primary">
                        Tell us about yourself
                    </h3>

                    {/* Form */}
                    <form onSubmit={handleSubmit(handleBeRider)} className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

                        <div>
                            <label className="text-sm font-medium">Your Name</label>
                            <input className="input input-bordered w-full mt-1" name="name" type="text" placeholder="Enter your name" />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Driving License Number</label>
                            <input className="input input-bordered w-full mt-1" name="license" type="text" placeholder="Enter license number" />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Your Email</label>
                            <input className="input input-bordered w-full mt-1" name="email" type="email" placeholder="example@gmail.com" />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Your NID</label>
                            <input className="input input-bordered w-full mt-1" name="nid" type="text" placeholder="National ID Number" />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Select Region</label>
                            <select className="select select-bordered w-full mt-1" name="region">
                                <option disabled selected>Select your Region</option>
                                <option>Rajshahi</option>
                                <option>Dhaka</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Select District</label>
                            <select className="select select-bordered w-full mt-1" name="district">
                                <option disabled selected>Select your District</option>
                                <option>Dhaka District</option>
                                <option>Chattogram District</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Phone Number</label>
                            <input className="input input-bordered w-full mt-1" name="phone" type="number" placeholder="Enter phone number" />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Vehicle Brand Model & Year</label>
                            <input className="input input-bordered w-full mt-1" name="vehicleModel" type="text" placeholder="e.g., Honda Shine 2019" />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Vehicle Registration Number</label>
                            <input className="input input-bordered w-full mt-1" name="regNum" type="text" placeholder="Enter registration no." />
                        </div>

                        <div className="md:col-span-2">
                            <label className="text-sm font-medium">Tell us about yourself</label>
                            <textarea className="textarea textarea-bordered w-full mt-1" name="about" placeholder="Write something about you" rows="3"></textarea>
                        </div>

                        <button className="bg-secondary text-black font-semibold py-3 rounded-lg hover:bg-green-400 transition md:col-span-2">
                            Submit
                        </button>

                    </form>
                </div>

                {/* Right Side Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={riderImg}
                        alt="Rider Illustration"
                        className="max-w-[400px] w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default BeaRider;
