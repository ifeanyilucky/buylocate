import { Heading, Text, Stack } from '@chakra-ui/react';

export default function Orders() {
  return (
    <Stack>
      <Heading size={{ base: 'lg', md: 'xl' }}>Orders</Heading>
      <Text>Below is a history of your orders to date</Text>
    </Stack>
  );
}
