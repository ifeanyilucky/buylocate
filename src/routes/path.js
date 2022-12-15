const ROOT_PAGE = '/';
const ROOT_AUTH = '/auth';
const ROOT_DASHBOARD = '/dashboard';

const path = (root, page) => {
  return `${root}${page}`;
};
export const PATH_PAGES = {
  about: '/about',
  faqs: '/faqs',
  services: '/services',
  contactUs: '/contact-us',
  team: '/our-team',
  pricing: '/pricing',
  shopping: '/shopping',
  checkout: '/checkout',
  checkoutSuccess: '/checkout/success',
  requestQuote: '/request-quote',
  privacyPolicy: 'privacy-policy',
};
export const PATH_AUTH = {
  login: path(ROOT_AUTH, '/login'),
  register: path(ROOT_AUTH, '/register'),
  forgotPassword: path(ROOT_AUTH, '/forgot-password'),
};
export const PATH_DASHBOARD = {
  root: ROOT_DASHBOARD,
  orders: path(ROOT_DASHBOARD, '/orders'),
  faqs: path(ROOT_DASHBOARD, 'faqs'),
  pricing: path(ROOT_DASHBOARD, '/pricing'),
  addressList: path(ROOT_DASHBOARD, '/addresses'),
  paymentMethod: path(ROOT_DASHBOARD, '/payment-method'),
};
