import React from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-accent/10">
      <div className="bg-base-100 rounded-2xl shadow-lg max-w-lg w-full p-8 text-center">

        {/* Cancel Icon */}
        <div className="flex justify-center mb-4">
          <FaTimesCircle className="text-red-500 text-6xl" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-primary mb-2">
          Payment Cancelled
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your payment was not completed. Don’t worry — you can try again
          anytime.
        </p>

        {/* Info Box */}
        <div className="bg-base-200/90 rounded-lg p-4 text-sm text-gray-700 mb-6">
          <p>❌ Payment process was interrupted</p>
          <p>💳 No money has been charged</p>
          <p>🔁 You can retry the payment securely</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboard/my-percels">
            <button className="btn btn-secondary text-neutral px-6">
              Try Payment Again
            </button>
          </Link>

          <Link to="/">
            <button className="btn btn-outline px-6">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
