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
import Page from 'src/components/Page';

export default function RequestQuote() {
  const { register, handleSubmit } = useForm();
  return (
    <Page title='Request a quote'>
      <Container maxW='6xl'>
        <Stack textAlign='center'>
          <Text as='h2' fontSize={{ base: '3xl', md: '4xl' }} fontWeight='700'>
            Request a Quote
          </Text>
          <Text fontSize={{ base: 'lg' }}>
            We will get back to you within 24 hours
          </Text>
        </Stack>
        <Card my={10} maxW={'3xl'} mx='auto'>
          <CardBody>
            <Stack spacing={8}>
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
                  />
                </Stack>
                <Stack spacing={2} width='100%'>
                  <FormLabel>Email</FormLabel>
                  <Input
                    py='6'
                    type='email'
                    variant={'filled'}
                    placeholder='Email'
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
                />
              </Stack>
              <Stack spacing={2} width='100%'>
                <FormLabel>Errand details</FormLabel>
                <Textarea
                  type='text'
                  variant={'filled'}
                  placeholder='Errand details*'
                />
              </Stack>
              <Button py={7} colorScheme='brand'>
                Submit
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </Page>
  );
}
