import { PATH_AUTH, PATH_PAGES } from 'src/routes/path';

export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Shopping', to: PATH_PAGES.shopping },
  { label: 'Request Quote', to: PATH_PAGES.requestQuote },
  {
    label: 'Pricing',
    to: PATH_PAGES.pricing,
  },
  {
    label: 'About us',
    to: PATH_PAGES.about,
    // children: [
    //   {
    //     label: 'About us',
    //     subLabel: 'Get to know more about Buylocate',
    //     to: PATH_PAGES.about,
    //   },
    //   {
    //     label: 'Our Team',
    //     subLabel: 'Up-and-coming Designers',
    //     to: '/our-team',
    //   },
    // ],
  },
  {
    label: 'FAQs',
    to: PATH_PAGES.faqs,
  },

  {
    label: 'Our Services',
    to: PATH_PAGES.services,
  },
];
