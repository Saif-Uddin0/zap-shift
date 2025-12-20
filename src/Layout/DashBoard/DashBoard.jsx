import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
    FiMenu,
    FiHome,
    FiPackage,
    FiUsers,
    FiTruck,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";
import logo from "../../assets/Logo (2).png";

const Dashboard = () => {
    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-5 py-3 rounded-lg text-sm font-medium transition
     ${isActive
            ? "bg-secondary text-base-300"
            : "text-primary hover:bg-base-200"
        }`;

    return (
        <div className="drawer lg:drawer-open min-h-screen bg-[#DADADA]">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* ================= CONTENT ================= */}
            <div className="drawer-content flex flex-col">
                {/* ---------- Navbar ---------- */}
                <div className="navbar bg-base-100 shadow-sm px-6">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-square">
                            <FiMenu className="text-xl" />
                        </label>
                    </div>

                    <div className="flex-1">

                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-medium">Saif Uddin</p>
                            <p className="text-xs text-gray-500">Admin</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                            S
                        </div>
                    </div>
                </div>

                {/* ---------- Page Content ---------- */}
                {/* <div className="p-6">
                    <div className="bg-base-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-primary">
                            Welcome to ZapShift Dashboard
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Manage parcels, riders, and deliveries from one place.
                        </p>
                    </div>
                </div> */}
                <Outlet></Outlet>
            </div>





            {/* ================= SIDEBAR ================= */}
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                <aside className="w-64 bg-base-100  min-h-screen flex flex-col">
                    {/* Logo */}
                    <Link to={'/'} className="px-6 py-6 lg:py-3.5 border-dashed border-gray-300 border-b">
                        <img src={logo} alt="ZapShift" className="h-9" />
                    </Link>

                    {/* Menu */}
                    <ul className="menu flex-1 px-3 py-4 space-y-1 ">
                        <li>
                            <NavLink to="/dashboard" className={linkClass}>
                                <FiHome />
                                Dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/parcels" className={linkClass}>
                                <FiPackage />
                                Parcels
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/riders" className={linkClass}>
                                <FiTruck />
                                Riders
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/customers" className={linkClass}>
                                <FiUsers />
                                Customers
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/settings" className={linkClass}>
                                <FiSettings />
                                Settings
                            </NavLink>
                        </li>
                    </ul>

                    {/* Logout */}
                    <div className="px-4 py-4 border-dashed border-gray-300 border-t">
                        <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 transition hover:cursor-pointer">
                            <FiLogOut />
                            Logout
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Dashboard;
