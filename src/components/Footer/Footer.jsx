import React from "react";
import logo from "../../assets/Logo (3).png";
import youtube from "../../assets/youtube.png";
import linkdin from "../../assets/linkedin-icon 2.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter-logo-2 3.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="container mx-auto bg-base-300 rounded-2xl text-white pt-16 px-5">
            <div className="text-center">

                {/* Logo */}
                <img src={logo} alt="logo" className="h-14 mx-auto mb-3" />

                {/* Description */}
                <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassles.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>

                {/* Divider line */}
                <div className="h-px bg-white/10 w-full max-w-3xl mx-auto mt-7 mb-5"></div>

                {/* Nav Links */}
                <ul className="flex justify-center gap-8 text-gray-300 text-sm font-light mb-6 flex-wrap">
                    <li><Link to="/services" className="hover:text-white transition cursor-pointer">Services</Link></li>
                    <li><Link to="/coverage" className="hover:text-white transition cursor-pointer">Coverage</Link></li>
                    <li><Link to="/about" className="hover:text-white transition cursor-pointer">About Us</Link></li>
                    <li><Link to="/pricing" className="hover:text-white transition cursor-pointer">Pricing</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition cursor-pointer">Contact</Link></li>
                </ul>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                    <img src={facebook} alt="facebook" className="h-7 w-7 cursor-pointer hover:opacity-70" />
                    <img src={twitter} alt="twitter" className="h-7 w-7 cursor-pointer hover:opacity-70" />
                    <img src={linkdin} alt="linkedin" className="h-7 w-7 cursor-pointer hover:opacity-70" />
                    <img src={youtube} alt="youtube" className="h-7 w-7 cursor-pointer hover:opacity-70" />
                </div>

                {/* Bottom Divider */}
                <div className="h-px bg-white/10 w-full max-w-3xl mx-auto mt-7"></div>

                {/* Copyright */}
                <p className="text-base-100 text-xs mt-2 font-light p-3">
                    © {new Date().getFullYear()} ZapShift – All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
