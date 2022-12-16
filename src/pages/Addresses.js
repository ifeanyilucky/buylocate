import {
  Card,
  CardBody,
  Container,
  Heading,
  VStack,
  Text,
  ButtonGroup,
  Button,
  Box,
  Stack,
  useDisclosure,
  CircularProgress,
  Grid,
  GridItem,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Slide,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { Link as RouterLink } from 'react-router-dom';
import { PATH_PAGES } from 'src/routes/path';
import Page from 'src/components/Page';
import NewAddress from 'src/components/Dashboard/NewAddress';
import { useSelector, useDispatch } from 'src/redux/store';
import { useEffect } from 'react';
import {
  editAddress,
  getAddressBook,
  removeAddress,
} from 'src/redux/slices/user';
import { useForm } from 'react-hook-form';

export default function Address() {
  const { user } = useAuth();
  const [editOpen, setEditOpen] = useState(false);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    dispatch(getAddressBook());
  }, [dispatch]);
  const { isLoading, addressBook } = useSelector((state) => state.user);

  if (isLoading && !addressBook.length) {
    return (
      <Box>
        <CircularProgress isIndeterminate />
      </Box>
    );
  }
  return (
    <Page title='Account'>
      <Container maxW='full' h='full'>
        <Stack mb={10} spacing={5}>
          <Heading size={{ base: 'md', md: 'lg' }}>Addresses</Heading>

          {!addressBook.length ? (
            <Box>
              <Heading size='md'>No saved addresses</Heading>
              <Text color='gray'>
                Let us know where to ship all your products
              </Text>
            </Box>
          ) : (
            <Grid
              templateColumns={{ md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)' }}
              gap={3}
            >
              {addressBook.map((address) => (
                <GridItem key={address?._id}>
                  <Card shadow={'none'} bgColor='gray.100' textAlign='left'>
                    <CardBody position='relative'>
                      <Stack mb={10}>
                        {address.default && (
                          <Heading size='sm'>Default address</Heading>
                        )}

                        <Text>
                          {address?.firstName} {address?.lastName}
                        </Text>
                        <Text>
                          {address?.city}, {address?.country}
                        </Text>
                        <Text
                          textDecor='underline'
                          onClick={() => dispatch(removeAddress(address?._id))}
                          cursor='pointer'
                          as='div'
                          fontWeight='700'
                        >
                          Delete Address
                        </Text>
                        <Text
                          cursor={'pointer'}
                          textDecor='underline'
                          fontWeight='700'
                          as='div'
                          onClick={() =>
                            editOpen ? setEditOpen(false) : setEditOpen(true)
                          }
                        >
                          Edit Address
                        </Text>
                      </Stack>
                      {editOpen ? (
                        <EditBox address={address} setEditOpen={setEditOpen} />
                      ) : (
                        ''
                      )}
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          )}
          <Box>
            <Button onClick={onOpen} colorScheme='brand'>
              Add new address
            </Button>
          </Box>
        </Stack>
      </Container>
      <NewAddress onClose={onClose} isOpen={isOpen} />
    </Page>
  );
}

const EditBox = ({ address, setEditOpen }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.product);
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      firstName: address?.firstName,
      lastName: address?.lastName,
      addressOne: address?.addressOne,
      addressTwo: address?.addressTwo,
      city: address?.city,
      state: address?.state,
      zipCode: address?.zipCode,
      country: address?.country,
      phoneNumber: address?.phoneNumber,
      default: address?.default,
    },
  });
  const values = getValues();

  const onSubmit = (values) => {
    dispatch(editAddress(address?._id, values, setEditOpen));
  };
  return (
    <Box>
      <Stack as='form' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <FormControl isInvalid={errors.firstName}>
              <FormLabel>First name</FormLabel>
              <Input
                variant={'main'}
                {...register('firstName')}
                placeholder='First name'
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.lastName}>
              <FormLabel>Last name</FormLabel>
              <Input
                variant='main'
                {...register('lastName')}
                placeholder='Last name'
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>

          <FormControl isInvalid={errors.addressOne}>
            <FormLabel>Address Line 1</FormLabel>
            <Input
              variant='main'
              {...register('addressOne')}
              placeholder='Address line 1'
            />
            <FormErrorMessage>
              {errors.addressOne && errors.addressOne.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Address Line 2</FormLabel>
            <Input
              variant='main'
              {...register('addressTwo')}
              placeholder='Address line 2'
            />
          </FormControl>

          <FormControl isInvalid={errors.city}>
            <FormLabel>City</FormLabel>
            <Input {...register('city')} variant='main' placeholder='City' />
            <FormErrorMessage>
              {errors.city && errors.city.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.state}>
            <FormLabel>State</FormLabel>
            <Input variant='main' {...register('state')} placeholder='State' />
            <FormErrorMessage>
              {errors.state && errors.state.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.zipCode}>
            <FormLabel>Zip Code</FormLabel>
            <Input
              variant='main'
              type='number'
              {...register('zipCode')}
              placeholder='Zip code'
            />
            <FormErrorMessage>
              {errors.zipCode && errors.zipCode.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.country}>
            <FormLabel>Country</FormLabel>
            <Input
              variant='main'
              {...register('country')}
              placeholder='Country'
            />
            <FormErrorMessage>
              {errors.country && errors.firstName.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.phoneNumber}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              variant='main'
              {...register('phoneNumber')}
              placeholder='Phone number'
            />
            <FormErrorMessage>
              {errors.phoneNumber && errors.phoneNumber.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <Checkbox
              defaultChecked={values.default}
              onChange={(e) => setValue(e.target.checked)}
            >
              Make this my primary address
            </Checkbox>
          </FormControl>
          <Button variant='brand' type='submit' isLoading={isLoading}>
            Update
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
