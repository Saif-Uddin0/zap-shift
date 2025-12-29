import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loader from '../../../components/Loader/Loader';
import { FaUserShield, FaUserTimes } from "react-icons/fa";
import { useState } from 'react';
import Swal from 'sweetalert2';

const UserManagement = () => {
    const axiosSecure = useAxiosSecure();
    const [selectedUser, setSelectedUser] = useState(null);


    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        const roleInfo = { role: 'admin' }
        axiosSecure.patch(`/users/${user._id}`, roleInfo)
            .then(res => {
                console.log(res.data);
                setSelectedUser(null);
                document.getElementById('my_modal_4').close();
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.displayName} Marked as an Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }



    const handleRemoveAdmin = user => {
        const roleInfo = { role: 'user' }
        axiosSecure.patch(`/users/${user._id}`, roleInfo)
            .then(res => {
                console.log(res.data);
                setSelectedUser(null);
                document.getElementById('my_modal_4').close();
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.displayName} removed from Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }



    if (isLoading) return <Loader />;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-primary mb-6">
                User Management ({users.length})
            </h1>

            <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
                <table className="table w-full">
                    <thead className="bg-gray-200 text-primary">
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Joined</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="hover:bg-gray-100">
                                <td>{index + 1}</td>

                                {/* User info */}
                                <td className="flex items-center gap-3">
                                    <img
                                        src={user.photoURL}
                                        alt={user.displayName}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <span className="font-medium">
                                        {user.displayName || "No Name"}
                                    </span>
                                </td>

                                <td>{user.email}</td>

                                {/* Role badge */}
                                <td>
                                    <span
                                        className={`badge ${user.role === 'admin'
                                            ? 'badge-secondary text-base-300'
                                            : user.role === 'user'
                                                ? 'badge-primary text-base-100'
                                                : 'badge-info'
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>

                                <td>
                                    {new Date(user.createdAt).toLocaleDateString()}
                                </td>

                                {/* Action */}
                                <td className="text-center">
                                    <button className="btn btn-xs btn-outline"
                                        onClick={() => {
                                            setSelectedUser(user);
                                            document.getElementById('my_modal_4').showModal();
                                        }}>
                                        Manage
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {users.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center py-8 text-gray-400">
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box max-w-md rounded-2xl">

                        {/* Header */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={selectedUser?.photoURL}
                                alt={selectedUser?.displayName}
                                className="w-20 h-20 rounded-full border-2 border-primary mb-3"
                            />

                            <h3 className="text-xl font-bold">
                                {selectedUser?.displayName || "Unknown User"}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {selectedUser?.email}
                            </p>

                            <span
                                className={`mt-2 badge px-4 py-3 text-sm ${selectedUser?.role === "admin"
                                    ? "badge-secondary text-base-300"
                                    : "badge-info text-base-100"
                                    }`}
                            >
                                Current Role: {selectedUser?.role}
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="divider my-4"></div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3">
                            {selectedUser?.role !== "admin" && (
                                <button
                                    onClick={() => handleMakeAdmin(selectedUser)}
                                    className="btn btn-accent w-full flex items-center gap-2 text-base-100"
                                >
                                    <FaUserShield className="text-lg" />
                                    Promote to Admin
                                </button>
                            )}

                            {selectedUser?.role === "admin" && (
                                <button
                                    onClick={() => handleRemoveAdmin(selectedUser)}
                                    className="btn btn-error w-full flex items-center gap-2 text-white"
                                >
                                    <FaUserTimes className="text-lg" />
                                    Remove Admin Role
                                </button>
                            )}
                        </div>

                        {/* Warning */}
                        <p className="mt-4 text-xs text-center text-gray-500">
                            ⚠️ Role changes will affect system permissions immediately.
                        </p>

                        {/* Footer */}
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-ghost">Cancel</button>
                            </form>
                        </div>

                    </div>
                </dialog>



            </div>
        </div>
    );
};

export default UserManagement;
