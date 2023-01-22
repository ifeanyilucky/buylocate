import {
  FormControl,
  FormLabel,
  Stack,
  Heading,
  Input,
  Textarea,
  Box,
  Image,
  Button,
  RadioGroup,
  Text,
  useToast,
  FormErrorMessage,
  Radio,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import { useStateContext } from '../../context/stateContext';
import useAuth from '../../hooks/useAuth';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { resetCart } from 'src/redux/slices/product';
import { useSelector, useDispatch } from 'src/redux/store';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createNewOrder } from 'src/redux/slices/user';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().required('Email is required'),
});

export default function CheckoutForm() {
  const [radioValue, setRadioValue] = React.useState('card');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const { user } = useAuth();
  const isMountedRed = useIsMountedRef();
  const { checkout } = useSelector((state) => state.product);
  const { cart, price, total } = checkout;
  console.log(cart);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      country: '',
      paymentMethod: 'card',
      state: '',
      cardNumber: '',
      expiryDate: '',
      securityCode: '',
      deliveryAddress: '',
      totalAmount: total,
      pin: '1234',
    },
    shouldUseNativeValidation: false,
    shouldUnregister: false,
    shouldFocusError: true,
    criteriaMode: 'firstError',
    reValidateMode: 'onChange',
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const { firstName, lastName, email, paymentMethod } = getValues();
  const config = {
    public_key: process.env.REACT_APP_FLW_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email: email,
      name: `${firstName} ${lastName}`,
    },
    customizations: {
      title: 'Payment on Buylocate',
      description: 'Payment for local Nigeria food items',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const flutterwavePay = useFlutterwave(config);
  const onSubmit = async (values) => {
    console.log(values);

    flutterwavePay({
      callback: (response) => {
        console.log(response);
        dispatch(
          createNewOrder({
            paymentMethod: values.paymentMethod,
            transaction: response,
            products: cart,
          })
        );
        resetCart();
        closePaymentModal();
      },
    });
  };

  const today = new Date();
  const currentDate =
    today.getFullYear() + '-' + ('0' + (today.getMonth() + 11)).slice(-2);

  return (
    <Box onSubmit={handleSubmit(onSubmit)} as='form' w='100%' maxW={'100%'}>
      <Stack spacing={{ base: '8', md: '10' }} flex='2' maxW={'100%'} w='100%'>
        <Stack spacing={15} direction='column' w='100%'>
          <Stack spacing={5} direction={{ base: 'column', md: 'row' }} w='100%'>
            <FormControl isInvalid={errors.firstName}>
              <FormLabel>First name</FormLabel>
              <Input
                py={7}
                type='text'
                variant='outline'
                placeholder='First name'
                {...register('firstName', { required: true })}
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.lastName}>
              <FormLabel>Last name</FormLabel>
              <Input
                py={7}
                type='text'
                variant='outline'
                placeholder='Last name'
                {...register('lastName')}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              py={7}
              type='email'
              variant='outline'
              placeholder='Email'
              {...register('email')}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <Stack spacing={5} direction={{ base: 'column', md: 'row' }}>
            <FormControl isInvalid={errors.country}>
              <FormLabel>Country</FormLabel>
              <Input
                {...register('country')}
                py={7}
                variant='outline'
                placeholder='Country'
              />
            </FormControl>
            <Stack w='100%'>
              <FormLabel>State</FormLabel>
              <Input
                {...register('state')}
                py={7}
                variant='outline'
                placeholder='State'
              />
            </Stack>
          </Stack>
          <Stack spacing={5}>
            <FormControl isInvalid={errors.deliveryAddress}>
              <FormLabel>Address</FormLabel>
              <Input
                type='text'
                py={7}
                {...register('deliveryAddress')}
                placeholder='Street Name / Building / Apartment No. / Floor'
              />
            </FormControl>
            <FormControl isInvalid={errors.apartment}>
              <FormLabel>Apartment, suite, etc. (optional)</FormLabel>
              <Input
                type='text'
                py={7}
                {...register('apartment')}
                placeholder='Apartment, suite, etc. (optional)'
              />
            </FormControl>
          </Stack>
        </Stack>
        <Heading fontSize='2xl' fontWeight='extrabold'>
          Payment method
        </Heading>

        <Stack spacing='6'>
          <RadioGroup value={radioValue} onChange={setRadioValue}>
            <Box
              border='1px'
              borderColor={'gray.300'}
              rounded='lg'
              maxW='430px'
              p={5}
              display='flex'
              justifyContent='space-between'
            >
              <Radio value='card'>Card</Radio>
              <Image
                src='/images/icons/FLUTTER.png'
                alt='flutterwave'
                height='50px'
                width='auto'
              />
            </Box>
          </RadioGroup>
        </Stack>
        <Stack spacing={5}>
          <Text fontSize='sm' textAlign='center'>
            By clicking the button, you agree to the Terms and Conditions
          </Text>
          <Button
            size={'lg'}
            isLoading={loading}
            loadingText='Please wait...'
            w='100%'
            colorScheme={'brand'}
            variant='solid'
            py={7}
            type='submit'
          >
            Place Order
          </Button>
        </Stack>
        {/* <Stack spacing='6'>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack> */}
      </Stack>
    </Box>
  );
}
