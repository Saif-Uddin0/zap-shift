import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user ,loading} = useAuth();

    const location = useLocation();
    if (loading){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate state={location.pathname} to={'/auth/signin'}></Navigate>
    }
    return children;
};

export default PrivateRoutes;