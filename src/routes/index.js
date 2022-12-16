import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages';
import About from '../pages/about-us';
import CheckoutSuccess from '../pages/checkout-success';
import Faqs from '../pages/faqs';
import Login from '../pages/login';
import Register from '../pages/register';
import Pricing from '../pages/pricing';
import ExternalLayout from '../layout/ExternalLayout';
import Shopping from 'src/pages/shopping';
import AuthLayout from 'src/layout/AuthLayout';
// import Orders from 'src/pages/DashboardOverview';
import Checkout from 'src/pages/checkout';
// import DashboardLayout from 'src/layout/dashboard';
import GuestGuard from 'src/Guards/GuestGuard';
import AuthGuard from 'src/Guards/AuthGuard';
import PrivacyPolicy from 'src/pages/privacyPolicy';
import RequestQuote from 'src/pages/RequestQuote';
import CheckoutLayout from 'src/layout/CheckoutLayout';
import DashboardOverview from 'src/pages/DashboardOverview';
import Address from 'src/pages/Addresses';
import Contact from 'src/pages/contact';
export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <ExternalLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/privacy-policy', element: <PrivacyPolicy /> },
        { path: '/request-quote', element: <RequestQuote /> },
        { path: '/contact-us', element: <Contact /> },
        { path: '/faqs', element: <Faqs /> },
        { path: '/pricing', element: <Pricing /> },
        { path: '/shopping', element: <Shopping /> },
      ],
    },
    {
      path: '/checkout',
      element: <CheckoutLayout />,
      children: [{ path: '', element: <Checkout /> }],
    },
    { path: '/checkout/success', element: <CheckoutSuccess /> },
    {
      path: '/auth',
      element: <GuestGuard />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <AuthGuard>
          <ExternalLayout />
        </AuthGuard>
      ),
      children: [
        { path: '', element: <DashboardOverview /> },
        // { path: 'orders', element: <Orders /> },
        { path: 'register', element: <Register /> },
        { path: 'addresses', element: <Address /> },
      ],
    },
  ]);
}
