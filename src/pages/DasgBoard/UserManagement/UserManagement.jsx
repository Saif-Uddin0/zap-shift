import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loader from '../../../components/Loader/Loader';

const UserManagement = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

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
                                        className={`badge ${
                                            user.role === 'admin'
                                                ? 'badge-error'
                                                : user.role === 'rider'
                                                ? 'badge-secondary text-base-300'
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
                                    <button className="btn btn-xs btn-outline">
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
            </div>
        </div>
    );
};

export default UserManagement;
