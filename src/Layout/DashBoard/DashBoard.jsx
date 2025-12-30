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
import useAuth from "../../hooks/useAuth";
import { FaMotorcycle, FaRegCreditCard, FaUserCheck, FaUsers } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { PackageSearch } from "lucide-react";
import useRole from "../../hooks/useRole";


const Dashboard = () => {

    const { role } = useRole();
    const { signOutUser, user } = useAuth();




    const loggingOut = () => {
        signOutUser()
            .then()
            .catch(err => {
                console.log(err);

            })
    }
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
                            <p className="text-sm font-medium">{user?.displayName}</p>
                            <span
                                className={`text-xs px-2 py-0.5 rounded-full font-medium
    ${role === 'admin' && 'bg-green-100 text-base-300'}
    ${role === 'rider' && 'bg-violet-300 text-base-300'}
    ${role === 'user' && 'bg-secondary text-base-300'}
  `}
                            >
                                {role? role.charAt(0).toUpperCase() + role.slice(1) : ''}
                            </span>
                        </div>
                        <img src={user?.photoURL} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center font-bold text-primary" alt="" />
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
                            <NavLink to="/dashboard/send-parcel" className={linkClass}>
                                <FiTruck className="text-lg"></FiTruck>
                                Send Parcel
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/my-percels" className={linkClass}>
                                <PackageSearch size={18} />
                                My Parcels
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/payment-history" className={linkClass}>
                                <FaRegCreditCard />
                                Payment History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/berider" className={linkClass}>
                                <FaMotorcycle className="text-lg" />
                                Be a Rider
                            </NavLink>
                        </li>
                        {
                            role === 'admin' &&
                            <>
                                <li>
                                    <NavLink to="/dashboard/approve-rider" className={linkClass}>
                                        < FaUserCheck className="text-lg" />
                                        Approve Rider
                                    </NavLink>
                                </li>


                                <li>
                                    <NavLink to="/dashboard/user-management" className={linkClass}>
                                        <FaUsers className="text-lg"></FaUsers>
                                        User Management
                                    </NavLink>
                                </li>
                            </>
                        }


                    </ul>

                    {/* Logout */}
                    <div className="px-4 py-4 border-dashed border-gray-300 border-t">
                        <button onClick={loggingOut} className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 transition hover:cursor-pointer">
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
