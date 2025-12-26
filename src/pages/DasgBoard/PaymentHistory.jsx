import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaHashtag } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        data: payments = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["payments", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    if (isError) {
        return (
            <p className="text-center py-10 text-red-500">
                Failed to load payment history
            </p>
        );
    }

    return (
        <div className="p-8 min-h-screen">
            <section className="bg-base-100 rounded-xl p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-5xl font-semibold text-primary">
                        Payment History
                        <span className="text-gray-500 text-base ml-2">
                            ({payments.length})
                        </span>
                    </h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-100 my-10">
                    <table className="table w-full">
                        <thead className="bg-gray-200 text-primary">
                            <tr>
                                <th><FaHashtag /></th>
                                <th>Parcel</th>
                                <th>Transaction ID</th>
                                <th>Tracking ID</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {payments.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="text-center py-8 text-gray-400">
                                        No payment history found
                                    </td>
                                </tr>
                            ) : (
                                payments.map((payment, index) => (
                                    <tr
                                        key={payment._id}
                                        className="hover:bg-base-100 transition"
                                    >
                                        <td>{index + 1}</td>

                                        <Link  to={`/dashboard/payment/${payment.parcelId}`}>
                                            <td className="font-medium text-primary hover:text-accent">
                                                {payment.parcelName}
                                            </td></Link>

                                        <td className="text-xs text-gray-500">
                                            {payment.transactionId}
                                        </td>

                                        <td className="text-xs">
                                            {payment.trackingId}
                                        </td>

                                        <td className="font-semibold text-accent">
                                            ৳ {payment.amount}
                                        </td>

                                        <td>
                                            <span className="badge badge-accent badge-md text-base-100">
                                                
                                                Paid
                                            </span>
                                        </td>

                                        <td className="text-sm text-gray-500">
                                            {new Date(payment.paidAt).toLocaleDateString()}
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

export default PaymentHistory;
