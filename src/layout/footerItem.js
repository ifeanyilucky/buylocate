import { PATH_PAGES } from 'src/routes/path';

export const footerItems = [
  {
    title: 'Company',
    subItems: [
      {
        name: 'Shopping',
        link: PATH_PAGES.shopping,
      },
      {
        name: 'Pricing',
        link: PATH_PAGES.pricing,
      },
      {
        name: 'Our Services',
        link: PATH_PAGES.services,
      },
      {
        name: 'About us',
        link: PATH_PAGES.about,
      },
      {
        name: 'Our team',
        link: PATH_PAGES.team,
      },
    ],
  },
  {
    title: 'Other',
    subItems: [
      {
        name: 'Contact us',
        link: PATH_PAGES.contactUs,
      },
      {
        name: 'Support',
        link: '/faqs',
      },
      {
        name: 'Refund policy',
        link: '/faqs',
      },
      {
        name: 'Privacy policy',
        link: '/faqs',
      },
      {
        name: 'Terms & Condition',
        link: '/faqs',
      },
    ],
  },
];
