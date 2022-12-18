import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Text,
  FormControl,
  FormLabel,
  Stack,
  Box,
  Input,
  FormErrorMessage,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import AuthLayout from '../layout/AuthLayout';
import useAuth from '../hooks/useAuth';
import { AuthContext } from '../context/JWTContext';
import { PATH_AUTH } from 'src/routes/path';
import Page from 'src/components/Page';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { registerUser } = useAuth();
  const toast = useToast();
  const validateRegistration = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    shouldUseNativeValidation: false,
    resolver: yupResolver(validateRegistration),
  });

  const onSubmit = async (values) => {
    console.log(values);

    setLoading(true);
    try {
      await registerUser(values);
      toast({
        status: 'success',
        variant: 'top-accent',
        title: 'Success',
        position: 'top-right',
        description: 'Registration success!',
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        status: 'error',
        variant: 'top-accent',
        position: 'top-right',
        title: 'Something went wrong',
        description: `${error.message}`,
      });
    }
  };
  useEffect(() => {
    console.log(isSubmitting);
  }, []);
  return (
    <AuthLayout
      title={'Create Account'}
      description={'Already have an account?'}
      link={PATH_AUTH.login}
      linkText='Login'
    >
      <Page title='Create an account'>
        <Text>Enter your details to get started.</Text>
        <Box as={'form'} mt={10} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={5}>
            <Stack spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl isInvalid={errors.firstName}>
                <FormLabel htmlFor='name'>First name</FormLabel>
                <Input
                  placeholder='First name'
                  {...register('firstName')}
                  py='6'
                  type='text'
                />
                <FormErrorMessage>
                  {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.lastName}>
                <FormLabel htmlFor='name'>Last name</FormLabel>
                <Input
                  id='email'
                  placeholder='Last name'
                  {...register('lastName')}
                  py='6'
                  type='text'
                />
                <FormErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>

            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor='name'>Email address</FormLabel>
              <Input
                id='email'
                placeholder='Email address'
                {...register('email')}
                py='6'
                type='email'
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel htmlFor='name'>Password</FormLabel>
              <Input
                id='password'
                type='password'
                placeholder='Password'
                {...register('password')}
                py='6'
              />

              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <Button
            mt={4}
            colorScheme='brand'
            isLoading={loading}
            type='submit'
            loadingText='Please wait...'
            w='full'
            py={6}
          >
            Register
          </Button>
        </Box>
      </Page>
    </AuthLayout>
  );
};

export default Register;
