import React from 'react';
import { footerItems } from './footerItem';
import {
  Box,
  Container,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Heading,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import Logo from '../components/Logo';
import CallToAction from './CallToAction';
import { Blur } from './AuthLayout';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <div className='bg-gradient'>
      <CallToAction />
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>
              <Heading size='sm'>Services</Heading>
            </ListHeader>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link to={'#'}>Country Check</Link>
              <Tag size={'sm'} bg='green.300' ml={2} color={'white'}>
                New
              </Tag>
            </Stack>
            <Link to={'#'}>Errands</Link>
            <Link to={'#'}>Country check</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>
              <Heading size='sm'>{footerItems[0].title}</Heading>
            </ListHeader>
            {footerItems[0].subItems.map((item) => (
              <Link key={item.link} to={item.link}>
                {item.name}
              </Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>
              {' '}
              <Heading size='sm'>{footerItems[1].title}</Heading>
            </ListHeader>
            {footerItems[1].subItems.map((item) => (
              <Link key={item.link} to={item.link}>
                {item.name}
              </Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>
              {' '}
              <Heading size='sm'>Follow Us</Heading>
            </ListHeader>
            <Link to={'#'}>Facebook</Link>
            <Link to={'#'}>Twitter</Link>
            <Link to={'#'}>Dribbble</Link>
            <Link to={'#'}>Instagram</Link>
            <Link to={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Buylocate Africa. All rights reserved
        </Text>
      </Box>
      {/* <Blur
        position={'absolute'}
        bottom={10}
        right={-10}
        style={{ filter: 'blur(100px)' }}
      /> */}
    </div>
  );
}
