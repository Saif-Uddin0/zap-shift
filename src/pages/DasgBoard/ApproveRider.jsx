import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaCheckCircle, FaEye, FaTimesCircle } from "react-icons/fa";
import Loader from "../../components/Loader/Loader";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ApproveRider = () => {
    const axiosSecure = useAxiosSecure();


    const statusStyles = {
        pending: "badge badge-warning",
        approved: "badge badge-success",
        rejected: "badge badge-error",
    };

    const {
        data: riders = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["riders"],
        queryFn: async () => {
            const res = await axiosSecure.get("/riders");
            return res.data;
        },
    });

    const updatedStatus = (rider, status) => {
        Swal.fire({
            title: `${status} this rider?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: `${status}`,
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedInfo = { status: status, email: rider.email }
                axiosSecure.patch(`/riders/${rider._id}`, updatedInfo).then((res) => {
                    if (res.data.modifiedCount) {
                        Swal.fire(`${status}!`,
                            `Rider has been ${status}.`, "success");
                        refetch();
                    }
                });
            }
        });
    }

    // approve rider
    const handleApprove = (rider) => {
        updatedStatus(rider, "approved")
    };

    // reject rider
    const handleReject = (rider) => {
        updatedStatus(rider, "rejected")
    };

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6 text-primary">
                Approve Riders ({riders.length})
            </h2>

            <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
                <table className="table w-full">
                    <thead className="bg-gray-200 text-primary">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Region</th>
                            <th>District</th>
                            <th>Status</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {riders.map((rider, index) => (
                            <tr key={rider._id} className="hover:bg-gray-50">
                                <td>{index + 1}</td>
                                <td className="font-medium">{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.region}</td>
                                <td>{rider.district}</td>
                                <td>
                                    <span className={statusStyles[rider.status] || "badge badge-neutral"}>
                                        {rider.status.charAt(0).toUpperCase() + rider.status.slice(1)}
                                    </span>
                                </td>

                                <td className="text-center">
                                    {rider.status === "pending" ? (
                                        <div className="flex justify-center gap-3">
                                            <Link
                                                to={`/dashboard/rider-details/${rider._id}`}
                                                className="btn btn-sm btn-secondary text-base-300"
                                                title="view"
                                            >
                                                <FaEye />
                                            </Link>
                                            <button
                                                onClick={() => handleApprove(rider)}
                                                className="btn btn-sm btn-success text-base-100"
                                                title="Approve"
                                            >
                                                <FaCheckCircle />
                                            </button>

                                            <button
                                                onClick={() => handleReject(rider)}
                                                className="btn btn-sm btn-error text-base-100"
                                                title="Reject"
                                            >
                                                <FaTimesCircle />
                                            </button>

                                        </div>
                                    ) : (
                                        <div>
                                            <Link to={`/dashboard/rider-details/${rider._id}`}
                                                className="btn btn-sm btn-ghost border border-gray-200 hover:bg-base-200"
                                                title="Edit"
                                            >
                                                <FaMagnifyingGlass></FaMagnifyingGlass>view
                                            </Link>
                                            <button
                                                // onClick={() => handleDelete(parcel._id)}
                                                className="btn btn-sm btn-ghost border border-gray-200 hover:bg-red-100 text-red-500"
                                                title="Delete"
                                            >
                                                <FaTrashCan />Delete
                                            </button>
                                        </div>

                                    )}
                                </td>
                            </tr>
                        ))}

                        {riders.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center py-8 text-gray-400">
                                    No riders found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRider;
