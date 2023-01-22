import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

export default function Logo() {
  return (
    <Link to='/'>
      <a>
        <Heading size={{ base: 'lg', lg: 'xl' }} color='brand.500'>
          Buylocate
        </Heading>
      </a>
    </Link>
  );
}
