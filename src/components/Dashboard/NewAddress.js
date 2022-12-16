import {
  useDisclosure,
  Button,
  Modal,
  Stack,
  Box,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  ModalBody,
  Input,
  ModalContent,
  ModalFooter,
  FormErrorMessage,
  Checkbox,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useDispatch } from 'src/redux/store';
import { addNewAddressBook } from 'src/redux/slices/user';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export default function NewAddress({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const AddressValidation = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    addressOne: Yup.string().required(''),
    city: Yup.string().required('This field is required'),
    state: Yup.string().required('This field is required'),
    zipCode: Yup.number().required('This field is required'),
    country: Yup.string().required('This field is required'),
    phoneNumber: Yup.string().required('This field is required'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phoneNumber: '',
      default: false,
    },
    // shouldUseNativeValidation: false,
    resolver: yupResolver(AddressValidation),
  });

  const [loading, setLoading] = useState(false);
  const onSubmit = (values) => {
    dispatch(addNewAddressBook(values, setLoading, onClose));
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        scrollBehavior='inside'
        onClose={onClose}
        isCentered
        size='2xl'
      >
        <ModalOverlay />
        <ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add new address</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
                <Input
                  {...register('city')}
                  variant='main'
                  placeholder='City'
                />
                <FormErrorMessage>
                  {errors.city && errors.city.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.state}>
                <FormLabel>State</FormLabel>
                <Input
                  variant='main'
                  {...register('state')}
                  placeholder='State'
                />
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
                <Checkbox onChange={(e) => setValue(e.target.checked)}>
                  Make this my primary address
                </Checkbox>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant='brand' mr={3} type='submit' isLoading={loading}>
              Save
            </Button>
            <Button variant='setup' onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
