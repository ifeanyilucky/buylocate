import {
  Box,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  Stack,
  useColorModeValue as mode,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/Checkout/CartItem';
import { CartOrderSummary } from '../components/Checkout/CartOrderSummary';
import { cartData } from '../components/Checkout/_data';
import { useStateContext } from '../context/stateContext';
import EmptyCart from '../components/Checkout/EmptyCart';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import { useSelector } from 'src/redux/store';

const Checkout = () => {
  const { cartItems, totalQuantities, totalPrice } = useStateContext();
  const { checkout } = useSelector((state) => state.product);
  const { cart, total, subtotal } = checkout;
  const isEmptyCart = cart.length === 0;
  return (
    <Box
      maxW={'100%'}
      w='3xl'
      mx='auto'
      px={{ base: '1', md: '2', lg: '3' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      {isEmptyCart ? (
        <EmptyCart />
      ) : (
        <Stack
          direction={{ base: 'column-reverse', lg: 'row' }}
          maxW={'500px'}
          w={'100%'}
          mx='auto'
        >
          <CheckoutForm />

          {/* <Flex direction='column' align='center' flex='1'>
            <CartOrderSummary cart={cart} subtotal={subtotal} total={total} />
             <HStack mt='6' fontWeight='semibold'>
              <p>or</p>
              <ChakraLink
                as={Link}
                color={mode('blue.500', 'blue.200')}
                to='/shopping'
              >
                Continue shopping
              </ChakraLink>
            </HStack> 
          </Flex> */}
        </Stack>
      )}
    </Box>
  );
};

export default Checkout;
