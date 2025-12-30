import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader/Loader';
import useRole from '../hooks/useRole';
import { Navigate } from 'react-router-dom';
import Forbidden403 from '../components/Forbidden403/Forbidden403';

const AdminRoutes = ({ children }) => {

    const {  loading } = useAuth();
    const { roleLoading, role } = useRole()

    if (loading || roleLoading) {
        return <Loader></Loader>
    }

    if (role !== 'admin') {
        return <Forbidden403></Forbidden403>
    }


    return children;
};

export default AdminRoutes;