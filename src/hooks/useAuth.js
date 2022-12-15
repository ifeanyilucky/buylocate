import { setSession } from '../utils/jwt';
import React, { useContext } from 'react';
import { AuthContext } from '../context/JWTContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
