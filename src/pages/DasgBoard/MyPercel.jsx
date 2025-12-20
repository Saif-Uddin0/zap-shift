import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { FaHashtag } from "react-icons/fa";
import Swal from "sweetalert2";

const MyParcel = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        data: parcels = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["my-parcels", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/percels?email=${user.email}`);
            return res.data;
        },
    });



    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });

    }



    if (isLoading) {
        return <p className="text-center py-10 text-gray-500 min-h-screen">Loading parcels...</p>;
    }

    if (isError) {
        return <p className="text-center py-10 text-red-500">Failed to load parcels</p>;
    }

    return (
        <div className=" p-8">
            <section className="bg-base-100 rounded-xl  p-6 md:p-8 ">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
                    <h2 className="text-2xl font-semibold text-primary">
                        My Parcels
                        <span className="text-gray-500 text-base ml-2">
                            ({parcels.length})
                        </span>
                    </h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                    <table className="table w-full">
                        <thead className="bg-gray-200 text-primary">
                            <tr>
                                <th><FaHashtag /></th>
                                <th>Parcel Name</th>
                                <th>Cost</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {parcels.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-8 text-gray-400">
                                        No parcels found
                                    </td>
                                </tr>
                            ) : (
                                parcels.map((parcel, index) => (
                                    <tr key={parcel._id} className="hover:bg-base-100 transition">
                                        <td>{index + 1}</td>
                                        <td className="font-medium">{parcel.parcelName}</td>
                                        <td>৳ {parcel.cost}</td>
                                        <td>
                                            <span className="badge  badge-sm">
                                                Pending
                                            </span>
                                        </td>
                                        <td>
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    className="btn btn-sm btn-ghost border border-gray-200 hover:bg-base-200"
                                                    title="View"
                                                >
                                                    <FaMagnifyingGlass />
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-ghost border border-gray-200 hover:bg-base-200"
                                                    title="Edit"
                                                >
                                                    <FiEdit />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(parcel._id)}
                                                    className="btn btn-sm btn-ghost border border-gray-200 hover:bg-red-100 text-red-500"
                                                    title="Delete"
                                                >
                                                    <FaTrashCan />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default MyParcel;
