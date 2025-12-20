import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyPercel = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    // const {data: percels =[]} =  useQuery({
    //     queryKey: ['my-percels', user?.email],
    //     queryFn: async() =>{
    //         const res = await axiosSecure.get(`/percels?email=${user.email}`)
    //         return res.data
    //     }
    // })

    const { data: percels = [] } = useQuery({
        queryKey: ['my-percel', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/percels?email=${user.email}`);
            return res.data
        }
    })

    return (
        <div>
            <h2>All of my percel ({percels.length})</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            percels.map((p,index )=>
                                <tr key={p._id}>
                                    <th>{index + 1}</th>
                                    <td>{p.parcelName}</td>
                                    <td>{p.cost}</td>
                                    <td>Blue</td>
                                    <td>
                                        <button>
                                            <FaMagnifyingGlass />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPercel;