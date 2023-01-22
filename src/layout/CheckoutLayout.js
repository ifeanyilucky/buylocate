import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useBreakpointValue,
  Center,
  Divider,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'src/redux/store';
import { CartOrderSummary } from 'src/components/Checkout/CartOrderSummary';
import Logo from 'src/components/Logo';

export default function CheckoutLayout() {
  const { checkout } = useSelector((state) => state.product);
  const { cart, total, subtotal } = checkout;
  return (
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      sx={{
        '@media max-width(768px)': {
          display: 'none',
        },
      }}
    >
      <Box p={8} mx='auto' maxW='100%'>
        <Logo />
        <Outlet />
        <Divider orientation='horizontal' />
        <Box py={10}>
          <Text color='gray' fontSize={{ base: 'md' }}>
            &copy; 2022 Buylocate. All Rights Reserved
          </Text>
        </Box>
        <Divider orientation='horizontal' />
      </Box>
      <Center height='100%'>
        <Divider orientation='vertical' />
      </Center>
      <Flex flex={1}>
        <CartOrderSummary cart={cart} subtotal={subtotal} total={total} />
      </Flex>
    </Stack>
  );
}
