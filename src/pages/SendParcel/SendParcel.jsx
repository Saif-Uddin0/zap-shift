import React, { useState } from "react";

export default function SendParcel() {
  const [parcelType, setParcelType] = useState("document");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-white rounded-2xl shadow-md py-15 px-10 md:px-20 container mx-auto my-20 border border-gray-100">
      {/* Title */}
      <h2 className="text-5xl font-semibold text-primary mb-2">Send A Parcel</h2>
      <p className="text-base-300 text-lg font-bold mb-8">Enter your parcel details</p>

      <form onSubmit={handleSubmit}>
        {/* Parcel Type */}
        <div className="flex gap-6 mb-8 items-center">
          <label className="flex items-center gap-2 text-primary cursor-pointer">
            <input
              type="radio"
              name="parcelType"
              value="document"
              checked={parcelType === "document"}
              onChange={() => setParcelType("document")}
              className="text-base-200 focus:ring-green-400"
            />
            Document
          </label>
          <label className="flex items-center gap-2 text-primary cursor-pointer">
            <input
              type="radio"
              name="parcelType"
              value="non-document"
              checked={parcelType === "non-document"}
              onChange={() => setParcelType("non-document")}
              className="text-base-200 focus:ring-green-400"
            />
            Non-Document
          </label>
        </div>

        {/* Parcel Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <label htmlFor="parcelName" className="block text-primary mb-2">
              Parcel Name
            </label>
            <input
              id="parcelName"
              name="parcelName"
              type="text"
              placeholder="Parcel Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="parcelWeight" className="block text-primary mb-2">
              Parcel Weight (KG)
            </label>
            <input
              id="parcelWeight"
              name="parcelWeight"
              type="text"
              placeholder="Parcel Weight (KG)"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
            />
          </div>
        </div>

        {/* Sender & Receiver Details */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Sender */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Sender Details
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="senderName" className="block text-primary mb-2">
                  Sender Name
                </label>
                <input
                  id="senderName"
                  name="senderName"
                  type="text"
                  placeholder="Sender Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="senderAddress" className="block text-primary mb-2">
                  Address
                </label>
                <input
                  id="senderAddress"
                  name="senderAddress"
                  type="text"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="senderPhone" className="block text-primary mb-2">
                  Sender Phone No
                </label>
                <input
                  id="senderPhone"
                  name="senderPhone"
                  type="text"
                  placeholder="Sender Phone No"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="senderDistrict" className="block text-primary mb-2">
                  Your District
                </label>
                <select
                  id="senderDistrict"
                  name="senderDistrict"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                >
                  <option value="">Select your District</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chattogram">Chattogram</option>
                  <option value="khulna">Khulna</option>
                  <option value="rajshahi">Rajshahi</option>
                </select>
              </div>

              <div>
                <label htmlFor="pickupInstruction" className="block text-primary mb-2">
                  Pickup Instruction
                </label>
                <textarea
                  id="pickupInstruction"
                  name="pickupInstruction"
                  rows={2}
                  placeholder="Pickup Instruction"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Receiver Details
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="receiverName" className="block text-primary mb-2">
                  Receiver Name
                </label>
                <input
                  id="receiverName"
                  name="receiverName"
                  type="text"
                  placeholder="Receiver Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="receiverAddress" className="block text-primary mb-2">
                  Receiver Address
                </label>
                <input
                  id="receiverAddress"
                  name="receiverAddress"
                  type="text"
                  placeholder="Receiver Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="receiverContact" className="block text-primary mb-2">
                  Receiver Contact No
                </label>
                <input
                  id="receiverContact"
                  name="receiverContact"
                  type="text"
                  placeholder="Receiver Contact No"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="receiverDistrict" className="block text-primary mb-2">
                  Receiver District
                </label>
                <select
                  id="receiverDistrict"
                  name="receiverDistrict"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                >
                  <option value="">Select your District</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chattogram">Chattogram</option>
                  <option value="khulna">Khulna</option>
                  <option value="rajshahi">Rajshahi</option>
                </select>
              </div>

              <div>
                <label htmlFor="deliveryInstruction" className="block text-primary mb-2">
                  Delivery Instruction
                </label>
                <textarea
                  id="deliveryInstruction"
                  name="deliveryInstruction"
                  rows={2}
                  placeholder="Delivery Instruction"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pickup Info */}
        <p className="text-gray-600 text-sm mt-8 mb-4">
          ⏱ Pickup Time 4pm–7pm Approx
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-secondary hover:bg-green-400 text-primary font-medium px-8 py-3 rounded-md transition"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </section>
  );
}
