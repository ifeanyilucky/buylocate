import React, { useEffect, useState } from 'react';
import {
  Container,
  Stack,
  Box,
  Text,
  Button,
  Divider,
  Spacer,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';
import OrderDetails from '../components/Checkout/Success/OrderDetails';
import { ChevronRightIcon } from '../components/svgIcons';
import Logo from 'src/components/Logo';

export default function CheckoutSuccess() {
  return (
    <Container maxW='2xl'>
      <Box textAlign={'center'}>
        <Logo />
      </Box>
      <Stack my={5}>
        <Heading size='lg'>Your order is confirmed!</Heading>
      </Stack>
      <Stack>
        <Text color='gray'>
          Your order has been confirmed and will be shipped right away. You will
          receive a confirmation email or SMS. Our Customer Service might
          contact you shortly to verify your order.
        </Text>
      </Stack>
      <Box bg='gray.200' height={'full'} rounded='lg' my={10} p={7}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Stack spacing={5}>
            <Stack>
              <Text>Delivery is scheduled to</Text>
              <Text as='div' fontWeight='800'>
                Thursday, 21 May - Friday, 22 May
              </Text>
            </Stack>
            <Stack>
              <Text>Shipping method</Text>
              <Text as='div' fontWeight='800'>
                Standard
              </Text>
            </Stack>
            <Button colorScheme='brand' size='md' py={7}>
              Track your package
            </Button>
          </Stack>

          <Box height={'100%'} p={2} bg='white'>
            <QRCode
              size={100}
              style={{
                height: 'auto',
                maxWidth: '100%',
                width: '100%',
                paddingRight: 0,
                marginRight: 0,
              }}
              viewBox={`0 0 100 100`}
              value={'https://buylocate.com/orders'}
              width='100%'
            />
          </Box>
        </Stack>
      </Box>
      <OrderDetails />
      <Stack>
        <Box my={7}>
          <Link to='/shopping'>
            <Button variant='action' rightIcon={<ChevronRightIcon />} py={5}>
              Continue shopping
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
