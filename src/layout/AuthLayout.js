import Logo from '../components/Logo';
import {
  Stack,
  Flex,
  Box,
  Image,
  Button,
  Heading,
  Text,
  Container,
  Avatar,
  AvatarGroup,
  IconProps,
  Icon,
  Input,
  SimpleGrid,
  useBreakpointValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height='560px'
      viewBox='0 0 528 560'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='71' cy='61' r='111' fill='#2100a7' />
      <circle cx='244' cy='106' r='139' fill='#0000de' />
      <circle cy='291' r='139' fill='#2201e0' />
      <circle cx='80.5' cy='189.5' r='101.5' fill='#0e0267' />
      <circle cx='196.5' cy='317.5' r='101.5' fill='#ECC94B' />
      <circle cx='70.5' cy='458.5' r='101.5' fill='#48BB78' />
      <circle cx='426.5' cy='-0.5' r='101.5' fill='#4299E1' />
    </Icon>
  );
};

export default function AuthLayout({
  children,
  title,
  link,
  linkText,
  description,
}) {
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }} align='center'>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          >
            Your virtual representative
            <br />
            <Text
              as='span'
              bgGradient='linear(to-r, red.400,pink.400)'
              bgClip='text'
            >
              #
            </Text>
            buylocate
          </Heading>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4}>
            <Text
              color={'gray.800'}
              lineHeight={1.1}
              fontWeight='900'
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              as='span'
            >
              {title}
            </Text>
          </Stack>
          {children}
          <Text mt={7}>
            {description}{' '}
            <ChakraLink
              textColor={'brand'}
              as={Link}
              to={link}
              textTransform='capitalize'
              textDecor={'underline'}
            >
              {linkText}
            </ChakraLink>
          </Text>
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
  );
}
