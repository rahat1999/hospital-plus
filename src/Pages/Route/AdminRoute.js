import React from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const location = useLocation()
    const { user, admin, isLoading } = useAuth()

    if (isLoading) {
        return <div className='text-center mt-5 font-bold text-blue-600'>Loading..</div>
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;