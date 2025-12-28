import React from 'react';
import riderImg from "../../assets/be-a-rider.png";
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const BeaRider = () => {


    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, control } = useForm();
    const data = useLoaderData();

    // find the single region
    const regionDuplicated = data.map(c => c.region)
    const region = [...new Set(regionDuplicated)]

    const districtByRegion = region => {
        const regionDistrict = data.filter(c => c.region === region);
        const district = regionDistrict.map(d => d.district)
        return district;
    }


    // observer when chnage the region immedately chage the district
    const senderRegion = useWatch({ control, name: 'region' })

    const handleBeRider = data => {
        console.log(data);
        axiosSecure.post('/riders', data)
            .then(res => {
                console.log(res.data);
                
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 2000
                    });

                }
            })

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
                            <input className="input input-bordered w-full mt-1"
                                name="name"
                                {...register('name')}
                                type="text"
                                placeholder="Enter your name" />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Driving License Number</label>
                            <input className="input input-bordered w-full mt-1"
                                name="license"
                                type="text"
                                {...register('license')}
                                placeholder="Enter license number" />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Your Email</label>
                            <input className="input input-bordered w-full mt-1"
                                name="email"
                                defaultValue={user?.email}
                                type="email"
                                {...register('email')}
                                placeholder="example@gmail.com" />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Your NID</label>
                            <input className="input input-bordered w-full mt-1"
                                name="nid"
                                type="text"
                                {...register('nid')}
                                placeholder="National ID Number" />
                        </div>


                        {/* region  set dynamically */}

                        <div>
                            <label htmlFor="region" className="block text-primary mb-2">
                                Sender Region
                            </label>
                            <select
                                id="region"
                                {...register('region')}
                                className="select w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                            >
                                <option>Select your Region</option>
                                {region.map((r, i) => <option key={i} value={r}>{r}</option>)}

                            </select>
                        </div>

                        {/* district  set dynamically */}
                        <div>
                            <label htmlFor="district" className="block text-primary mb-2">
                                District
                            </label>
                            <select
                                id="district"
                                {...register('district')}
                                className="select w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                            >
                                <option>Select your district</option>
                                {
                                    districtByRegion(senderRegion).map((d, i) =>
                                        <option key={i} value={d}>{d}</option>
                                    )
                                }

                            </select>
                        </div>


                        {/* address */}
                        <div>
                            <label htmlFor="address" className="block text-primary mb-2">
                                Address
                            </label>
                            <input
                                id="address"
                                {...register('address')}
                                type="text"
                                placeholder="Address"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Phone Number</label>
                            <input className="input input-bordered w-full mt-1"
                                name="phone"
                                type="number"
                                {...register('phone')}
                                placeholder="Enter phone number" />
                        </div>

                        {/* vehicle model number */}
                        <div>
                            <label className="text-sm font-medium">Vehicle Brand Model & Year</label>
                            <input className="input input-bordered w-full mt-1" name="vehicleModel" type="text" placeholder="e.g., Honda Shine 2019" />
                        </div>
                        {/* registration number */}
                        <div>
                            <label className="text-sm font-medium">Vehicle Registration Number</label>
                            <input className="input input-bordered w-full mt-1" name="regNum" type="text" placeholder="Enter registration no." />
                        </div>
                        {/* textarea */}
                        <div className="md:col-span-2">
                            <label className="text-sm font-medium">Tell us about yourself</label>
                            <textarea className="textarea textarea-bordered w-full mt-1"
                                name="about"
                                {...register('about')}
                                placeholder="Write something about you" rows="3"></textarea>
                        </div>
                        {/* submit button */}
                        <button type='submit' className="bg-secondary text-black font-semibold py-3 rounded-lg hover:bg-primary hover:text-base-100 transition md:col-span-2">
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
