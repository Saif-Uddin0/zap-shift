import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Loader/Loader";
import { FaArrowLeft } from "react-icons/fa";

const RiderDetails = () => {
    const { riderId } = useParams();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const { data: rider = {}, isLoading } = useQuery({
        queryKey: ["rider", riderId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders/${riderId}`);
            return res.data;
        },
    });

    if (isLoading) return <Loader />;

    return (
        <div className="p-4 md:p-8 min-h-screen flex items-center justify-center">
            <div className="bg-base-100 rounded-2xl shadow-md p-6 md:p-8 container mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        {/* Back Button */}


                        <h2 className="text-3xl font-bold text-primary">
                            Rider Details
                        </h2>
                        <span
                            className={`badge px-4 py-2 text-sm ${rider.status === "approved"
                                ? "badge-success"
                                : rider.status === "pending"
                                    ? "badge-warning"
                                    : "badge-error"
                                }`}
                        >
                            {rider.status?.charAt(0).toUpperCase() + rider.status?.slice(1)}
                        </span>
                    </div>

                    
                        
                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-sm btn-secondary text-base-300 flex items-center gap-2 hover:bg-primary hover:text-base-100 shadow-none"
                        >
                            <FaArrowLeft /> Back
                        </button>
                    
                </div>

                {/* Card */}
                <div className="p-8 grid md:grid-cols-2 gap-8">
                    {/* Left Info */}
                    <div className="space-y-4">
                        <Info label="Name" value={rider.name} />
                        <Info label="Email" value={rider.email} />
                        <Info label="Phone" value={rider.phone} />
                        <Info label="NID" value={rider.nid} />
                        <Info label="License No" value={rider.license} />
                    </div>

                    {/* Right Info */}
                    <div className="space-y-4">
                        <Info label="Region" value={rider.region} />
                        <Info label="District" value={rider.district} />
                        <Info label="Address" value={rider.address} />
                        <Info
                            label="Applied At"
                            value={new Date(rider.createdAt).toLocaleString()}
                        />
                    </div>

                    {/* About */}
                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-primary mb-2">About Rider</h4>
                        <p className="bg-accent p-4 rounded-lg text-base-100">
                            {rider.about || "No description provided"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Info = ({ label, value }) => (
    <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-gray-800">{value || "—"}</p>
    </div>
);

export default RiderDetails;
