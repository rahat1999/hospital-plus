
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';


const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    let location = useLocation();

    if (isLoading) {
        return <div className='text-center mt-5 font-bold text-blue-500'>
            <p>Loading..</p>
        </div>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivetRoute;