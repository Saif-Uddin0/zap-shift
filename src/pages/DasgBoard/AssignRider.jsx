import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loader from '../../components/Loader/Loader';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const AssignRider = () => {
    const axiosSecure = useAxiosSecure();
    const riderModalRef = useRef();
    const [selectParcel, setSelectPercel] = useState(null)

    const { data: parcels = [],refetch:percelRefech, isLoading, isError, error } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get('/percels?deliveryStatus=pending-pickup');
            return res.data;
        }
    });


    // todo 
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', selectParcel?.senderDistrict],
        enabled: !!selectParcel,
        queryFn: async () => {
            const res = await axiosSecure.get(`riders?status=approved&district=${selectParcel.senderDistrict}`);
            return res.data;
        },
    });



    const handleAssignRider = rider => {
        const riderAssignInfo = {
            riderId: rider._id,
            riderEmail: rider.email,
            riderName: rider.name,
            // parcelId: selectParcel._id
        }
        axiosSecure.patch(`/percels/${selectParcel._id}`, riderAssignInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    riderModalRef.current.close()
                    percelRefech();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Rider has been assinged",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }



    const openAssignModal = parcel => {
        setSelectPercel(parcel);
        riderModalRef.current.showModal()
    }

    if (isLoading) return <Loader></Loader>
    if (isError) return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Assign Rider ({parcels.length})</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">#</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Parcel Name</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Weight (kg)</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Sender</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Receiver</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Booking Date</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Cost</th>
                            <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {parcels.map((parcel, index) => (
                            <tr key={parcel._id} className="bg-gray-100 hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm">{index + 1}</td>
                                <td className="px-4 py-2 text-sm">{parcel.parcelName}</td>
                                <td className="px-4 py-2 text-sm">{parcel.parcelWeight}</td>
                                <td className="px-4 py-2 text-sm">
                                    {parcel.senderName} <br />
                                    {parcel.senderPhone} <br />
                                    {parcel.senderRegion}, {parcel.senderDistrict} <br />
                                    {parcel.senderAddress}
                                </td>
                                <td className="px-4 py-2 text-sm">
                                    {parcel.receiverName} <br />
                                    {parcel.receiverContact || '-'} <br />
                                    {parcel.receiverRegion}, {parcel.receiverDistrict} <br />
                                    {parcel.receiverAddress}
                                </td>
                                <td className="px-4 py-2 text-sm">{parcel.email}</td>
                                <td className="px-4 py-2 text-sm">{new Date(parcel.bookingDate).toLocaleString()}</td>
                                <td className="px-4 py-2 text-sm capitalize">{parcel.deliveryStatus}</td>
                                <td className="px-4 py-2 text-sm">${parcel.cost}</td>
                                <td className="px-4 py-2 text-center text-sm">
                                    <button onClick={() => openAssignModal(parcel)} className="btn btn-md btn-secondary text-base-300">Available Rider</button>
                                </td>
                            </tr>
                        ))}

                        {parcels.length === 0 && (
                            <tr>
                                <td colSpan="11" className="text-center py-8 text-gray-400">
                                    No parcels found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box max-w-4xl">
                        <h3 className="font-bold text-lg mb-4">
                            Available Riders ({riders.length})
                        </h3>

                        {riders.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="table table-zebra w-full">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>District</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {riders.map((rider, index) => (
                                            <tr key={rider._id}>
                                                <td>{index + 1}</td>
                                                <td className="font-medium capitalize">{rider.name}</td>
                                                <td>{rider.email}</td>
                                                <td>{rider.phone}</td>
                                                <td>{rider.district}</td>
                                                <td className="text-center">
                                                    <button
                                                        className="btn btn-sm btn-accent text-base-100"
                                                        onClick={() => {
                                                            handleAssignRider(rider)
                                                        }}
                                                    >
                                                        Assign
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p className="text-center text-gray-400 py-6">
                                No riders available in this district
                            </p>
                        )}

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-outline">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AssignRider;
