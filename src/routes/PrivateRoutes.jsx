import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader/Loader';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user ,loading} = useAuth();
    if (loading){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate to={'/auth/signin'}></Navigate>
    }
    return children;
};

export default PrivateRoutes;