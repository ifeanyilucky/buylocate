import {
  Stack,
  Flex,
  Text,
  Button,
  ButtonGroup,
  Divider,
  Center,
  Spacer,
  Box,
  IconButton,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/stateContext';
import { CloseIcon, MinusIcon, PlusIcon } from '../svgIcons';
import { fCurrency, fNumber } from '../../utils/formatNumber';
import { useDispatch, useSelector } from 'src/redux/store';
import {
  decreaseQuantity,
  increaseQuantity,
  applyDiscount,
  resetCart,
  deleteCart,
} from 'src/redux/slices/product';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

export default function CartItems() {
  const {
    setShowCart,

    showCart,
  } = useStateContext();

  //redux
  const dispatch = useDispatch();

  const { checkout } = useSelector((state) => state.product);
  const { cart, total, discount, subtotal } = checkout;
  const isEmptyCart = cart.length === 0;

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };
  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };
  const handleDeleteCart = (productId) => {
    dispatch(deleteCart(productId));
  };
  console.log(subtotal);
  return (
    <Drawer
      isOpen={showCart}
      onClose={() => setShowCart(false)}
      placement='right'
      size='lg'
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Order</DrawerHeader>
        <DrawerBody>
          {isEmptyCart ? (
            <Box textAlign='center' mt={20}>
              <Text as='span' fontWeight={500} fontSize='2xl'>
                Your cart is empty
              </Text>
              <Text fontSize='lg' mt={5}>
                {' '}
                Oops! You have nothing here
              </Text>{' '}
            </Box>
          ) : (
            cart.map((item) => (
              <Stack direction='row' height='120px' key={item.id} my={7}>
                <Stack>
                  <Image
                    width='120px'
                    height='120px'
                    rounded='lg'
                    src={item.image}
                    fit='cover'
                    alt={item.name}
                  />
                </Stack>

                <Stack
                  direction='row'
                  height='100%'
                  justifyContent='space-between'
                  width='100%'
                  pl={5}
                >
                  <Stack
                    direction='column'
                    justifyContent='space-between'
                    alignItems='flex-start'
                  >
                    <Text
                      as='span'
                      fontWeight={500}
                      fontSize={{ base: 'sm', md: 'lg' }}
                      textTransform='capitalize'
                    >
                      {item.name} - {fNumber(item?.price)}
                    </Text>
                    <Center>
                      <ButtonGroup variant='ghost' colorScheme='brand'>
                        <IconButton
                          icon={<MinusIcon />}
                          onClick={() => handleDecreaseQuantity(item.id)}
                        />
                        <Button>{item.quantity}</Button>
                        <IconButton
                          icon={<PlusIcon />}
                          onClick={() => handleIncreaseQuantity(item.id)}
                        />
                      </ButtonGroup>
                    </Center>
                  </Stack>
                  <Stack direction='column' justifyContent='space-between'>
                    <Text
                      as='span'
                      fontWeight={500}
                      fontSize={{ base: 'sm', md: 'lg' }}
                    >
                      {fCurrency(item?.price * item?.quantity)}
                    </Text>
                    <Button
                      fontWeight={400}
                      color='red.500'
                      fontSize={{ base: 'md' }}
                      onClick={() => handleDeleteCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            ))
          )}
          <Divider />
        </DrawerBody>
        {isEmptyCart ? (
          ''
        ) : (
          <DrawerFooter>
            <Button py={7} mr={2} onClick={resetCart}>
              Clear cart
            </Button>
            <Link to='/checkout'>
              <Button w='100%' colorScheme='brand' py={7}>
                Checkout ({fCurrency(total)})
              </Button>
            </Link>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
