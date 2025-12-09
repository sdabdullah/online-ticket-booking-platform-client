import React, { useContext } from 'react';
import { AuthContext } from '../ContextProviders/AuthContext';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;