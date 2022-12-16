import React from 'react';
import {
  Container,
  Heading,
  Box,
  Stack,
  Grid,
  GridItem,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import Page from 'src/components/Page';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Page title='Contact us'>
      <Container maxW='7xl' mt={20}>
        <Box maxW={'600px'}>
          <Stack mt={10} spacing={{ base: '12px', md: '90px' }}>
            <Heading size='lg'>Contact us</Heading>
            <Heading fontSize={{ base: '4xl', md: '7xl' }}>
              We're here to help you run errands
            </Heading>
          </Stack>
        </Box>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={10}
          my={20}
        >
          <GridItem w='100%' colSpan={1}>
            <Text variant={'subtext'}>
              We're just one click away to help you with your errands. Fill up
              the form and our Team will get back to you within 24 hours
            </Text>
          </GridItem>
          <GridItem w='100%' colSpan={2}>
            <Box
              bgColor='gray.200'
              as='form'
              p={{ base: 5, md: 10 }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Stack width='100%' spacing={5}>
                <Stack
                  width='100%'
                  direction={{ md: 'row', sm: 'column' }}
                  spacing={5}
                >
                  <Stack spacing={2} width='100%'>
                    <FormLabel>Your name</FormLabel>
                    <Input
                      py='6'
                      type='text'
                      variant={'filled'}
                      placeholder='Full name'
                      {...register('fullName')}
                    />
                  </Stack>
                  <Stack spacing={2} width='100%'>
                    <FormLabel>Email</FormLabel>
                    <Input
                      py='6'
                      type='email'
                      variant={'filled'}
                      placeholder='Email'
                      {...register('email')}
                    />
                  </Stack>
                </Stack>
                <Stack direction={{ md: 'row', sm: 'column' }}>
                  <Stack spacing={2} width='100%'>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      py='6'
                      type='text'
                      variant={'filled'}
                      placeholder='Phone number*'
                      {...register('phoneNumber')}
                    />
                  </Stack>
                </Stack>

                <Stack spacing={2} width='100%'>
                  <FormLabel>What can we help you with?</FormLabel>
                  <Textarea
                    type='text'
                    variant={'filled'}
                    placeholder='details*'
                    {...register('message')}
                  />
                </Stack>
                <Button py={7} colorScheme='brand' type='submit'>
                  Submit
                </Button>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Page>
  );
}
