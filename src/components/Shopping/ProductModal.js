import {
  useDisclosure,
  ModalHeader,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  CircularProgress,
  Image,
  Skeleton,
  ButtonGroup,
  Text,
  Divider,
  Box,
  Input,
  FormLabel,
  FormHelperText,
  FormControl,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useStateContext } from '../../context/stateContext';
import { useForm } from 'react-hook-form';
import { fCurrency } from '../../utils/formatNumber';
// redux
import { addCart } from 'src/redux/slices/product';
import { useDispatch } from 'src/redux/store';

export default function ProductModal({ product, onClose, isOpen }) {
  const btnRef = React.useRef(null);
  const [price, setPrice] = React.useState('');
  const toast = useToast();
  const { name, description, image } = product;
  const { qty, increaseQty, decreaseQty, onAdd, cartItems } = useStateContext();
  const itemAlreadyInCart = cartItems.find((item) => item.id === product.id);
  // redux
  const dispatch = useDispatch();
  const onAddCart = (_product) => {
    dispatch(addCart(_product));
  };

  const { register, handleSubmit, setValue, getValues, watch } = useForm({
    defaultValues: {
      id: product.id,
      name: name,
      description: description,
      image: image,
      price: '',
      quantity: 1,
    },
  });

  function onSubmit(values) {
    console.log(values);
    if (!values.price)
      toast({
        status: 'error',
        title: 'Price not found',
        description: 'Please enter price',
        variant: 'top-accent',
        isClosable: true,
        position: 'top-right',
      });
    else {
      onAddCart({
        ...values,
        subtotal: Number(values.price) * values.quantity,
      });
      toast({
        status: 'success',
        title: 'Success',
        description: 'Item has been added to cart',
        variant: 'top-accent',
        isClosable: true,
        position: 'top-right',
      });
      // onAdd({ ...product, price }, qty);
    }
  }
  const { quantity } = getValues();
  const incrementQuantity = () => {
    setValue('quantity', quantity + 1);
  };
  const decrementQuantity = () => {
    setValue('quantity', quantity - 1);
  };

  return (
    <FormControl>
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior='inside'
        size={'2xl'}
        isCentered
      >
        <ModalOverlay />

        <ModalContent
          maxHeight='100vh'
          marginBottom={{ base: 0, md: 0 }}
          marginTop={{ base: 0, md: 0 }}
          as='form'
          onSubmit={handleSubmit(onSubmit)}
        >
          {!image ? (
            <Skeleton />
          ) : (
            <Image
              width='100%'
              height='320px'
              fit='cover'
              src={image}
              alt={name}
              draggable='false'
              loading='lazy'
            />
          )}
          <ModalCloseButton bg='white' size='md' />

          <ModalHeader
            textTransform={'capitalize'}
            fontWeight={600}
            fontSize={{ base: 'xl', md: '3xl' }}
          >
            {name}
          </ModalHeader>
          <Divider colorScheme='gray.400' size={'2xl'} />
          <ModalBody height='100%' py={10}>
            <Stack>
              <Stack spacing={0.5} maxW={{ base: '100%', md: '300px' }}>
                <FormLabel>Enter price</FormLabel>
                <Input
                  type='number'
                  placeholder='Enter price'
                  py={6}
                  isRequired
                  {...register('price')}
                />
                <FormHelperText>Minimum price is NGN 40,000</FormHelperText>
              </Stack>
            </Stack>
          </ModalBody>
          <Divider colorScheme='gray.400' size={'2xl'} />
          <ModalFooter>
            <ButtonGroup mr={4} isAttached variant='outline' colorScheme='gray'>
              <Button
                py={8}
                fontSize={'xl'}
                disabled={quantity <= 1}
                onClick={decrementQuantity}
              >
                -
              </Button>
              <Button py={8} margin={0}>
                {watch('quantity')}
              </Button>
              <Button py={8} fontSize={'xl'} onClick={incrementQuantity}>
                +
              </Button>
            </ButtonGroup>
            <Button
              variant='solid'
              colorScheme='brand'
              w='100%'
              marginRight={3}
              size='lg'
              type='submit'
              // disabled={itemAlreadyInCart ? true : false}
              fontWeight={600}
              py={8}
            >
              Add to cart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FormControl>
  );
}
