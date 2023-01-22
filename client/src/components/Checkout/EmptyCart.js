import { Box, Stack, Container, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <Stack
      spacing={7}
      textAlign='center'
      justifyContent='center'
      alignItems='center'
    >
      <Box>
        <Image
          src='/images/icons/empty-cart.png'
          maxWidth='80%'
          w='170px'
          alt='empty-cart'
        />
      </Box>
      <Stack>
        <Text as='h1' fontWeight='800' fontSize='2xl'>
          Your cart is empty.
        </Text>
        <Text>Looks like you have no items in your shopping cart.</Text>
        <Text>
          Click<Link to='/shopping'> &nbsp; here</Link> to continue shopping.
        </Text>
      </Stack>
    </Stack>
  );
}
