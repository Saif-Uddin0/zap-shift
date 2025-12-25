import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaCheckCircle, FaCopy } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  const [paymentInfo, setPaymentInfo] = useState({
    transactionId: "",
    trackingId: "",
  });

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-accent/10 px-4">
      <div className="bg-base-100 rounded-2xl shadow-xl max-w-lg w-full p-8 text-center">

        {/* Icon */}
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

        {/* Title */}
        <h2 className="text-3xl font-bold text-primary mb-2">
          Payment Successful 🎉
        </h2>

        <p className="text-gray-600 mb-6">
          Your payment was completed successfully. Your parcel is now ready for processing.
        </p>

        {/* Info Box */}
        <div className="bg-[#DADADA]/30 rounded-xl p-5 text-left text-sm mb-6 space-y-4">

          {/* Transaction ID */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Transaction ID</p>
              <p className="font-medium text-primary break-all">
                {paymentInfo.transactionId || "Loading..."}
              </p>
            </div>
            <button
              onClick={() => copyText(paymentInfo.transactionId)}
              className="btn btn-xs btn-ghost"
            >
              <FaCopy />
            </button>
          </div>

          {/* Tracking ID */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Tracking ID</p>
              <p className="font-medium text-primary">
                {paymentInfo.trackingId || "Generating..."}
              </p>
            </div>
            <button
              onClick={() => copyText(paymentInfo.trackingId)}
              className="btn btn-xs btn-ghost"
            >
              <FaCopy />
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="text-sm text-primary mb-6 space-y-1">
          <p>✅ Payment verified</p>
          <p>📦 Parcel status updated</p>
          <p>🔐 Secure Stripe transaction</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard/my-percels"
            className="btn btn-secondary text-neutral px-6"
          >
            View My Parcels
          </Link>

          <Link to="/" className="btn btn-outline px-6">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
