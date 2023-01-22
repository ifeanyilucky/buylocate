import { Heading, Text } from '@chakra-ui/react';

export const Header = ({ children, ...other }) => (
  <Heading
    lineHeight={1}
    as={'h1'}
    fontSize={{ lg: '73px', md: '66px', sm: '48px', base: '36px' }}
    {...other}
  >
    {children}
  </Heading>
);

export const Header2 = ({ children, ...other }) => (
  <Heading
    lineHeight={1}
    as={'h1'}
    fontSize={{ lg: '56px', md: '48px', sm: '36px', base: '30px' }}
    {...other}
  >
    {children}
  </Heading>
);
