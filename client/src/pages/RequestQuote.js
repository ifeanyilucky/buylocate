import {
  Container,
  Input,
  FormLabel,
  Text,
  Stack,
  Card,
  CardBody,
  CardHeader,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Header } from 'src/components/custom';
import Page from 'src/components/Page';

export default function RequestQuote() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      errandDetails: '',
    },
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Page title='Request a quote'>
      <Container maxW='6xl'>
        <Stack textAlign='center' py='6.25rem'>
          <Header>Request a Quote</Header>
          <Text fontSize={{ base: 'lg', sm: '2xl' }} py={10}>
            We will get back to you within 24 hours
          </Text>
        </Stack>
        <Card my={10} maxW={'4xl'} mx='auto' shadow={'none'}>
          <CardBody>
            <Stack as='form' spacing={8} onSubmit={handleSubmit(onSubmit)}>
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
                <FormLabel>Subject</FormLabel>
                <Input
                  py='6'
                  type='text'
                  variant={'filled'}
                  placeholder='Subject'
                  {...register('subject')}
                />
              </Stack>
              <Stack spacing={2} width='100%'>
                <FormLabel>Errand details</FormLabel>
                <Textarea
                  type='text'
                  variant={'filled'}
                  placeholder='Errand details*'
                  {...register('errandDetails')}
                />
              </Stack>
              <Button py={7} colorScheme='brand' type='submit'>
                Submit
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </Page>
  );
}
