import { Url } from 'url';

export const navItems: {
  name: string;
  link: Url | String;
  title?: string;
  description?: string;
  subItems?: { name: string; link: Url | String }[];
}[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Shopping',
    link: '/shopping',
  },
  {
    name: 'Pricing',
    link: '/pricing',
  },
  {
    name: 'Company',
    link: '#',
    title: 'Buylocate',
    description: 'Get to know about our company',
    subItems: [
      {
        name: 'Our Services',
        link: '/our-services',
      },
      {
        name: 'About us',
        link: '/about-us',
      },
      {
        name: 'Our team',
        link: '/our-team',
      },
    ],
  },
  {
    name: 'FAQs',
    link: '/faqs',
  },
  {
    name: 'Contact us',
    link: '#',
    title: 'Get help',
    description: `Call or send us a message and we'll respond soonest.`,
    subItems: [
      {
        name: 'Whatsapp',
        link: '#',
      },
      {
        name: 'Call',
        link: '#',
      },
    ],
  },
];
