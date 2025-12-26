import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { FaHashtag } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CircleDollarSign } from "lucide-react";
import Loader from "../../components/Loader/Loader";

const MyParcel = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        data: parcels = [],
        isLoading,
        isError,
        refetch
    } = useQuery({
        queryKey: ["my-parcels", user?.email],
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

                axiosSecure.delete(`/percels/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            // refresh the data in ui
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });

    }


    const handlePayment =async(parcel)=>{
        const  paymentInfo = {
            cost: parcel.cost,
            parcelId : parcel._id,
            email: parcel.email,
            parcelName: parcel.parcelName

        }
        const res = await axiosSecure.post('/payment-checkout-session',paymentInfo);
        console.log(res.data.url);
        window.location.href= res.data.url;
    }


    if (isLoading) {
        return <Loader></Loader>
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
                                <th>Payment</th>
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
                                        <td className="font-medium text-primary hover:text-accent "><Link to={`/dashboard/payment/${parcel._id}`}>{parcel.parcelName}</Link></td>
                                        <td>৳ {parcel.cost}</td>
                                        <td>
                                            {
                                                parcel.paymentStatus === 'paid'? <span className="badge  badge-md badge-primary text-base-100 cursor-not-allowed">
                                                <CircleDollarSign size={15} />Paid
                                            </span> : 
                                            <button onClick={()=>handlePayment(parcel)} className="badge  badge-md badge-secondary text-base-300 hover:cursor-pointer">
                                               <MdOutlinePayment /> Pay
                                            </button>
                                            }
                                        </td>
                                            <td>blue</td>
                                        <td>
                                            <div className="flex items-center justify-center gap-2">
                                                
                                                <Link to={`/dashboard/payment/${parcel._id}`}
                                                    className="btn btn-sm btn-ghost border border-gray-200 hover:bg-base-200"
                                                    title="Edit"
                                                >
                                                    <FaMagnifyingGlass></FaMagnifyingGlass>view
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(parcel._id)}
                                                    className="btn btn-sm btn-ghost border border-gray-200 hover:bg-red-100 text-red-500"
                                                    title="Delete"
                                                >
                                                    <FaTrashCan />Delete
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
