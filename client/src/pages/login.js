import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Logo from '../components/Logo';
import AuthLayout from '../layout/AuthLayout';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Stack,
  Text,
  Link as ChakraLink,
  Box,
  useToast,
} from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';
import useIsMountedRef from '../hooks/useIsMountedRef';
import { PATH_AUTH, PATH_DASHBOARD } from 'src/routes/path';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const isMounted = useIsMountedRef();
  const { state } = useLocation();
  console.log(location.state);

  const loginValidation = Yup.object().shape({
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().required('Please enter your password'),
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginValidation),
    shouldUseNativeValidation: false,
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      await login(values.email, values.password);
      setLoading(false);

      toast({
        status: 'success',
        variant: 'top-accent',
        title: 'Success',
        position: 'top-right',
        description: 'You are logged in',
      });
      if (state?.from) {
        navigate(state?.from);
      }
      navigate(PATH_DASHBOARD.root, { replace: true });
    } catch (error) {
      console.log(error);
      toast({
        status: 'error',
        variant: 'top-accent',
        position: 'top-right',
        title: 'Something went wrong',
        description: `${error.message}`,
      });
      setLoading(false);
    }
  }
  return (
    <AuthLayout
      title={' Welcome back'}
      description='Don&lsquo;t have an account yet?'
      link={PATH_AUTH.register}
      linkText='Register'
    >
      <Stack spacing={3} mb={10}>
        <Text className='text-muted fw-normal'>
          Log in to continue to your account.
        </Text>
      </Stack>

      <Box as={'form'} mt={10} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
          <FormControl isInvalid={errors.email}>
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
          </FormControl>

          <FormControl isInvalid={errors.password}>
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
          Login
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default Login;
