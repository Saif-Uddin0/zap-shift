import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo (2).png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `relative pb-1 transition-all duration-300
        ${isActive ? "text-base-300 font-semibold" : "text-primary hover:scale-105 hover:text-primary hover:transition-transform"}
        after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:bg-primary after:transition-all after:duration-300
        ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `;

    const links = (
        <>
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
            <li><NavLink to="/coverage" className={navLinkClass}>Coverage</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
            <li><NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </>
    );

    return (
        <nav className="sticky top-5 h-fit z-50">
            <div className="w-full container mx-auto bg-base-100/98  rounded-3xl shadow-sm flex items-center justify-between px-4 py-5">

                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </Link>

                <ul className="hidden lg:flex items-center gap-8 font-medium">
                    {links}
                </ul>

                <div className="hidden lg:flex items-center gap-3">
                    <button className="px-4 py-2 font-medium border border-gray-400 text-primary rounded-full hover:border-primary hover:text-base-100 transition duration-300 hover:bg-primary ">
                        Sign In
                    </button>

                    <button className="bg-secondary text-base-300 px-4 py-2 rounded-full font-semibold hover:bg-secondary/80 transition">
                        Sign Up
                    </button>
                </div>
                <button
                    className="lg:hidden text-gray-700 text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {open && (
                <div className="lg:hidden w-full bg-base-100 shadow-md rounded-2xl mt-2 py-4 px-5 absolute">
                    <ul className="flex flex-col gap-4">
                        {links}
                    </ul>

                    <div className="flex flex-col mt-4 gap-2">
                        <button className="px-4 py-2 border border-gray-400 text-primary rounded-full hover:border-primary transition duration-300">
                            Sign In
                        </button>

                        <button className="bg-secondary text-base-300 px-4 py-2 rounded-full font-semibold hover:bg-secondary/80 transition">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
