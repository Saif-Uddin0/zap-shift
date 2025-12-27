import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo (2).png";
import sideImg from "../../assets/Login-Banner.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const SignUp = () => {
    const [showpass, setShowPass] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure()
    const { registerUser, googleSignIn, updateUserProfile } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = (data) => {

        const profileImg = data.photo[0];
        registerUser(data.email, data.password)
            .then(() => {
                // console.log(result);

                // 1. store the img in form Data
                const formData = new FormData();
                formData.append('image', profileImg)

                // 2.sent the photo to store and get the url
                axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`, formData)
                    .then(res => {
                        const photoUrl = res.data.data.url;

                        // create user in the database
                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoUrl
                        }
                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user is created in the data base');

                                }
                            })

                        // update profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoUrl
                        }
                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log('user profile updated');
                                navigate(location?.state || '/')

                            })
                            .catch(err => {
                                console.log(err);

                            })
                    })
            })
            .catch(err => {
                console.log(err);

            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);

                // create user in the database
                const userInfo = {
                    email: res.user.email,
                    displayName: res.user.displayName,
                    photoURL: res.user.photoURL
                }
                axiosSecure.post('/users', userInfo)
                    .then(res => {

                        console.log('user is created in the data base with social login ', res.data);
                        navigate(location?.state || '/')
                        toast.success("Sign in Successfully")


                    })
            })
            .catch(err => {
                console.log(err);

            })
    }

    return (
        <div className=" bg-gradient-to-r from-white to-[#F7FAE7] min-h-screen flex items-center justify-center bg-base-200">
            <div className="bg-white rounded-3xl shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">

                {/* Left */}
                <div className="p-10">
                    <Link to={'/'}><img src={logo} alt="Logo" className="h-10 mb-5" /></Link>

                    <h2 className="text-3xl font-bold text-primary mb-2">Create an Account</h2>
                    <p className="text-sm text-gray-600 mb-5">Register with ZapShift</p>

                    <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-4">
                        {/* name */}
                        <input type="text"
                            placeholder="Name"
                            {...register('name', { required: true })}
                            className="border px-4 py-2 rounded-lg focus:outline-primary" />
                        {errors.name?.type == 'required' && <p className="text-red-400 text-sm">Name is required..</p>}
                        {/* photo */}
                        <input type="file"
                            placeholder="Name"
                            {...register('photo', { required: true })}
                            className="border border-base-300 file-input  rounded-lg w-full" />
                        {errors.photo?.type == 'required' && <p className="text-red-400 text-sm">required the Photo</p>}

                        {/* email */}
                        <input type="email"
                            {...register('email', { required: true })}
                            placeholder="Email"
                            className="border px-4 py-2 rounded-lg focus:outline-primary" />
                        {errors.email?.type == 'required' && <p className="text-red-400 text-sm">Email is required..</p>}
                        {/* password */}
                        <div className="relative w-full">

                            <input type={showpass ? 'text' : 'password'}
                                {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/ })}
                                placeholder="Password"
                                className="border px-4 py-2 rounded-lg focus:outline-primary w-full pr-10" />
                            {errors.password?.type == 'required' && <p className="text-red-400 text-sm">Password is required..</p>}
                            {errors.password?.type == 'minLength' && <p className="text-red-400 text-sm">Password must be 6 character or longer..</p>}
                            {
                                errors.password?.type === 'pattern' && <p className="text-red-400 text-sm">Ensures at least one lowercase, one uppercase, and one special character.</p>
                            }

                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
                                onClick={() => setShowPass(!showpass)}
                            >
                                {showpass ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>


                        <button type="submit" className="bg-secondary text-base-300 font-semibold py-2 rounded-lg hover:bg-green-400 transition">
                            Register
                        </button>
                    </form>

                    <p className="text-center text-sm mt-4">
                        Already have an account? <Link state={location?.state} to="/auth/signin" className="text-primary underline">Login</Link>
                    </p>

                    <div className="mt-4">
                        <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-3 bg-white text-black border border-secondary rounded-lg py-2 hover:bg-gray-100 transition font-medium shadow-sm hover:shadow">
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
