import React from 'react';
import { Image, Box, Stack, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Items } from '../../storeItems';
export default function OrderDetails() {
  return (
    <Box>
      <Stack my={5}>
        <Text fontWeight='800' as='h1' fontSize='xl'>
          ORDER DETAILS
        </Text>
        <Text>Order no: </Text>
      </Stack>
      <Stack spacing={5}>
        {Items.slice(0, 3).map((item) => (
          <Stack
            direction='row'
            justifyContent='space-between'
            spacing={5}
            key={item.id}
          >
            <Image
              src={item.image}
              fit={'cover'}
              height='120px'
              width='110px'
              alt={item.name}
              rounded='lg'
            />
            <Stack spacing={2}>
              <Text>Vegetable Leaf</Text>
              <Text color='gray.600'>Quantity: 2</Text>
            </Stack>
            <Text as='h1' fontWeight='800'>
              NGN 3,200
            </Text>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
