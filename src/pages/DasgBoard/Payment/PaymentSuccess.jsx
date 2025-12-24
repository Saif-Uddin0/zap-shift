import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const [searchParams ] = useSearchParams();
  const sessionId = searchParams.get('sessionId')
  return (
    <div className="min-h-screen flex items-center justify-center bg-accent/10 px-4">
      <div className="bg-base-100 rounded-2xl shadow-lg max-w-lg w-full p-8 text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-primary mb-2">
          Payment Successful!
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your parcel booking has been confirmed
          successfully.
        </p>

        {/* Info Card */}
        <div className="bg-[#DADADA]/20 rounded-lg p-4 text-sm text-primary mb-6">
          <p>✅ Transaction completed securely</p>
          <p>📦 Parcel status updated</p>
          <p>📧 Confirmation sent to your email</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard/my-percels"
            className="btn btn-secondary text-neutral px-6"
          >
            View My Parcels
          </Link>

          <Link
            to="/"
            className="btn btn-outline px-6"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
