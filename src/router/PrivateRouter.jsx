import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import LoaderSpinner from '../component/Shared/Navbar/LoaderSpinner';

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth()

    if (loading) {
        return <LoaderSpinner></LoaderSpinner>
    }

    if (user && user?.email) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRouter;