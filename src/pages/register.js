import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import AuthLayout from '../layout/AuthLayout';
import useAuth from '../hooks/useAuth';
import { AuthContext } from '../context/JWTContext';
import { PATH_AUTH } from 'src/routes/path';
import Page from 'src/components/Page';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { registerUser } = useAuth();
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
  });

  const onSubmit = async (values) => {
    console.log(values);

    // try {
    //   await registerUser(values);
    // } catch (error) {
    //   console.log(error);
    // }
  };

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
          <FormControl isInvalid={errors}>
            <Stack spacing={5}>
              <Stack spacing={3} direction={{ base: 'column', md: 'row' }}>
                <Stack>
                  <FormLabel htmlFor='name'>First name</FormLabel>
                  <Input
                    placeholder='First name'
                    {...register('firstName', {
                      required: 'This is required',
                    })}
                    py='6'
                    type='text'
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </Stack>
                <Stack>
                  <FormLabel htmlFor='name'>Last name</FormLabel>
                  <Input
                    id='email'
                    placeholder='Last name'
                    {...register('lastName', {
                      required: 'This is required',
                    })}
                    py='6'
                    type='text'
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <FormLabel htmlFor='name'>Email address</FormLabel>
                <Input
                  id='email'
                  placeholder='Email address'
                  {...register('email', {
                    required: 'This is required',
                  })}
                  py='6'
                  type='email'
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </Stack>
              <Stack spacing={1}>
                <FormLabel htmlFor='name'>Password</FormLabel>
                <Input
                  id='password'
                  type='password'
                  placeholder='Password'
                  {...register('password', {
                    required: 'This is required',
                  })}
                  py='6'
                />
              </Stack>
            </Stack>

            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
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
