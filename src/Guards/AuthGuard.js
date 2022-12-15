import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, CircularProgress } from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';
import Login from '../pages/login';
import { PATH_AUTH, PATH_DASHBOARD } from 'src/routes/path';

export default function AuthGuard({ children }) {
  const [requestedLocation, setRequestedLocation] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      if (pathname !== requestedLocation) {
        setRequestedLocation(pathname);
      }
      navigate(PATH_AUTH.login, { replace: true, state: { from: pathname } });
    }
    if (requestedLocation && pathname !== requestedLocation) {
      setRequestedLocation(null);
      navigate(requestedLocation);
    }
  }, [pathname, isAuthenticated]);

  return (
    <>
      {!user ? (
        <Box height='100vh'>
          <CircularProgress
            position='absolute'
            top='50%'
            left='50%'
            margin='-25px 0 0 -25px'
            isIndeterminate
          />
        </Box>
      ) : (
        children
      )}
    </>
  );
}
