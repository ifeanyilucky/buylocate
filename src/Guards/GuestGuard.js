import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { PATH_DASHBOARD } from '../routes/path';
import { Outlet } from 'react-router-dom';

export default function GuestGuard() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate(PATH_DASHBOARD.root);
    }
  }, [isAuthenticated]);
  return <Outlet />;
}
