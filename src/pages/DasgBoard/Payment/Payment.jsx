import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loader from '../../../components/Loader/Loader';

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/percels/${parcelId}`);
            return res.data;
        },
    });

    const handlePayment = async () => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            email: parcel.email,
            parcelName: parcel.parcelName,
        };

        const res = await axiosSecure.post(
            '/create-checkout-session',
            paymentInfo
        );
        window.location.href = res.data.url;
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="p-4 md:p-8 min-h-screen flex items-center justify-center">
            <div className="bg-base-100 rounded-2xl shadow-md p-6 md:p-8 container mx-auto">

                {/* Header */}
                <div className="mb-6 border-b pb-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                        Parcel Payment
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Review your parcel details before payment
                    </p>
                </div>

                {/* Parcel Info Grid */}
                <div className="grid md:grid-cols-2 gap-6 text-sm">

                    {/* Left */}
                    <div className="space-y-3">
                        <Info label="Parcel Name" value={parcel.parcelName} />
                        <Info label="Parcel Type" value={parcel.percelType} />
                        <Info label="Weight" value={`${parcel.parcelWeight} KG`} />
                        <Info label="Cost" value={`৳ ${parcel.cost}`} highlight />
                        <Info label="Booking Date" value={new Date(parcel.bookingDate).toLocaleString()} />
                    </div>

                    {/* Right */}
                    <div className="space-y-3">
                        <Info label="Sender" value={parcel.senderName} />
                        <Info label="Sender Phone" value={parcel.senderPhone} />
                        <Info label="Sender Location" value={`${parcel.senderDistrict}, ${parcel.senderRegion}`} />
                        <Info label="Receiver" value={parcel.receiverName} />
                        <Info label="Receiver Location" value={`${parcel.receiverDistrict}, ${parcel.receiverRegion}`} />
                    </div>

                </div>

                {/* Instructions */}
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <Instruction
                        title="Pickup Instruction"
                        text={parcel.pickupInstruction}
                    />
                    <Instruction
                        title="Delivery Instruction"
                        text={parcel.deliveryInstruction}
                    />
                </div>

                {/* Pay Button */}
                <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t pt-6">
                    <p className="text-lg font-semibold text-primary">
                        Total Payable: <span className="text-accent">৳ {parcel.cost}</span>
                    </p>
                    {
                        parcel.paymentStatus === 'paid' ? <button
                            className="btn hover:cursor-not-allowed btn-primary text-base-100 px-8 text-lg"
                        >
                            Paid
                        </button> : <button
                            onClick={handlePayment}
                            className="btn btn-secondary text-neutral px-8 text-lg"
                        >
                            Pay Now
                        </button>
                    }

                </div>

            </div>
        </div>
    );
};

/* Reusable Components */

const Info = ({ label, value, highlight }) => (
    <div className="flex justify-between border-b pb-1">
        <span className="text-gray-500">{label}</span>
        <span className={`font-medium ${highlight ? 'text-accent' : 'text-primary'}`}>
            {value}
        </span>
    </div>
);

const Instruction = ({ title, text }) => (
    <div className="bg-[#DADADA]/40 rounded-lg p-4">
        <h4 className="font-semibold text-primary mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{text || 'N/A'}</p>
    </div>
);

export default Payment;
