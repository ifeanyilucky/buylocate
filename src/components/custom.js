import { Heading, Text } from '@chakra-ui/react';

export const Header = ({ children }) => (
  <Heading
    lineHeight={1}
    as={'h1'}
    fontSize={{ lg: '73px', md: '66px', sm: '48px', base: '36px' }}
  >
    {children}
  </Heading>
);

export const Header2 = ({ children }) => (
  <Heading
    lineHeight={1}
    as={'h1'}
    fontSize={{ lg: '56px', md: '48px', sm: '36px', base: '30px' }}
  >
    {children}
  </Heading>
);
