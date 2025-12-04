import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo (2).png";
import sideImg from "../../assets/Login-Banner.png";

const SignUp = () => {
    return (
        <div className=" bg-gradient-to-r from-white to-[#F7FAE7] min-h-screen flex items-center justify-center bg-base-200">
            <div className="bg-white rounded-3xl shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">

                {/* Left */}
                <div className="p-10">
                    <img src={logo} alt="Logo" className="h-10 mb-5" />

                    <h2 className="text-3xl font-bold text-primary mb-2">Create an Account</h2>
                    <p className="text-sm text-gray-600 mb-5">Register with ZapShift</p>

                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Name" className="border px-4 py-2 rounded-lg focus:outline-primary" />
                        <input type="email" placeholder="Email" className="border px-4 py-2 rounded-lg focus:outline-primary" />
                        <input type="password" placeholder="Password" className="border px-4 py-2 rounded-lg focus:outline-primary" />

                        <button className="bg-secondary text-base-300 font-semibold py-2 rounded-lg hover:bg-green-400 transition">
                            Register
                        </button> 
                    </form>

                    <p className="text-center text-sm mt-4">
                        Already have an account? <Link to="/auth/signin" className="text-primary underline">Login</Link>
                    </p>

                    <div className="mt-4">
                        <button className="w-full flex items-center justify-center gap-3 bg-white text-black border border-secondary rounded-lg py-2 hover:bg-gray-100 transition font-medium shadow-sm hover:shadow">
                            <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g>
                                    <path fill="#fff" d="M0 0h512v512H0z" />
                                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                    <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                    <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                    <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                                </g>
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="bg-[#F7FAE7] hidden md:flex items-center justify-center rounded-r-3xl">
                    <img src={sideImg} alt="Illustration" className="w-[80%]" />
                </div>

            </div>
        </div>
    );
};

export default SignUp;
