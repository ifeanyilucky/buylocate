import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Image,
  ButtonGroup,
  IconButton,
  Center,
  useColorModeValue as mode,
  Badge,
  Divider,
} from '@chakra-ui/react';
import * as React from 'react';
import { formatPrice } from './PriceTag';
import { useStateContext } from '../../context/stateContext';
import { fCurrency, fNumber } from '../../utils/formatNumber';

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;

  return (
    <Flex justify='space-between' fontSize='md'>
      <Text as='div' fontWeight='medium' color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? (
        <Text as='div' fontWeight='medium'>
          {value}
        </Text>
      ) : (
        { children }
      )}
    </Flex>
  );
};

export const CartOrderSummary = ({ cart, total, subtotal }) => {
  return (
    <>
      <Stack
        spacing='8'
        borderWidth='1px'
        padding='10'
        minW='339px'
        width='full'
      >
        {cart.map((item) => (
          <Stack direction='row' height='110px' key={item.id} my={5}>
            <Stack position='relative'>
              <Image
                width='110px'
                height='110px'
                rounded='md'
                src={item.image}
                fit='cover'
                alt={item.name}
              />
              <Badge
                colorScheme={'brand'}
                position='absolute'
                top='-13px'
                right='-8px'
              >
                {item.quantity}
              </Badge>
            </Stack>

            <Stack
              direction='row'
              height='100%'
              justifyContent='space-between'
              width='100%'
              pl={5}
            >
              <Stack
                direction='column'
                justifyContent='space-between'
                alignItems='flex-start'
              >
                <Text
                  as='span'
                  fontWeight={500}
                  fontSize={{ base: 'sm', md: 'lg' }}
                  textTransform='capitalize'
                >
                  {item.name} - {fNumber(item?.price)}
                </Text>
              </Stack>
              <Stack direction='column' justifyContent='space-between'>
                <Text
                  as='span'
                  fontWeight={500}
                  color='gray.500'
                  fontSize={{ base: 'xs', md: 'sm' }}
                >
                  {fCurrency(item?.price * item?.quantity)}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        ))}

        <Stack spacing='6'>
          <Divider />
          <OrderSummaryItem label='Subtotal' value={fCurrency(subtotal)} />
          <OrderSummaryItem label='Shipping' value={fCurrency(400)} />
          <Divider />
          <Flex justify='space-between'>
            <Text as='span' fontSize='lg'>
              Total
            </Text>
            <Text as='span' fontSize='xl' fontWeight='extrabold'>
              {fCurrency(total)}
            </Text>
          </Flex>
        </Stack>
      </Stack>{' '}
    </>
  );
};
