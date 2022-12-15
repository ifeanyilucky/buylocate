import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, CircularProgress, Box } from '@chakra-ui/react';
import theme from './theme';
import { HelmetProvider } from 'react-helmet-async';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import AuthProvider from './context/JWTContext';
import { StateContext } from './context/stateContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ReduxProvider store={store}>
          <PersistGate
            loading={
              <Box height='100vh'>
                <CircularProgress
                  position='absolute'
                  top='50%'
                  left='50%'
                  margin='-25px 0 0 -25px'
                  isIndeterminate
                />
              </Box>
            }
            persistor={persistor}
          >
            <AuthProvider>
              <StateContext>
                <TawkMessengerReact
                  propertyId={process.env.REACT_APP_TAWK_PROPERTY_ID}
                  widgetId={process.env.REACT_APP_TAWK_WIDGET_ID}
                />
                <App />
              </StateContext>
            </AuthProvider>
          </PersistGate>
        </ReduxProvider>
      </ChakraProvider>
    </BrowserRouter>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
