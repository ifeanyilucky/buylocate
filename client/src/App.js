import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, CircularProgress } from '@chakra-ui/react';
import Router from './routes';
import useAuth from './hooks/useAuth';

export default function App() {
  const { isInitialized } = useAuth();

  return (
    <>
      {isInitialized ? (
        <Router />
      ) : (
        <Box height='100vh'>
          <CircularProgress
            position='absolute'
            top='50%'
            left='50%'
            margin='-25px 0 0 -25px'
            isIndeterminate
          />
        </Box>
      )}
    </>
  );
}
